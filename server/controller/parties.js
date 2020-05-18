const express = require("express");
const router = express.Router();
const User = require("../models/index").User;
const UserParty = require("../models/index").UserParty;
const Recipe = require("../models/index").Recipe;
const Friendship = require("../models/index").Friendship;
const Party = require("../models/index").Party;
const Comment = require("../models/index").Comment;
const notificate = require("../notifications/main").notificate;
const broadcast = require("../notifications/main").broadcast;
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.json({ type: "application/vnd.api+json" }));
//router.use(bodyParser.urlencoded({ extended: false }));

//ritorna tutti i party dell'utente corrente
router.get("/", (req, res) => {
  console.log("ciao");
  res.send({ ciao: "hello" });
});

//aggiungi un party NON FUNZIONA
router.post("/", async (req, res) => {
  //questo deve avere un array di partecipanti, di id di ricette che sono già state aggiunte al db?
  //di birre, vini e cocktails
  try {
    console.log("ok");
    const party = await Party.new({
      wines: req.body.wines,
      cocktails: req.body.cocktails,
      beers: req.body.beers,
    });
    req.body.partecipants.forEach(async (el) => {
      const friend = await User.find({ raw: true, where: { id: el } });
      await party.setUser(friend);
    });
    // await party.setUser(req.session.userId);
    //da sostituire
    await party.setUser(req.body.userId);
    await party.save();
    res.send(party);
  } catch (e) {
    const errObj = {
      //name: e.name,
      //detail: e.parent.detail,
      //code: e.parent.code,
    };
    console.log(errObj);
    res.status(400).send(e);
  }
});

//ottieni il party con id e carica tutti i commenti e le info relative
router.get("/:id", async function (req, res) {
  const partyId = req.params.id;
  console.log(partyId);
  try {
    //const comments = []; //await Party.getComments(partyId); //Devo fare una chiamata al db che ritorna tutti i commenti relativi ad un party

    const party = await Party.findAll({
      //raw: true,
      where: { id: partyId },
      include: [
        {
          // Notice `include` takes an ARRAY
          model: User,
          attributes: ["firstName", "id", "email"],
          include: [
            {
              model: Comment,
              attributes: ["id", "userId", "text", "createdAt"],
            },
          ],
        },
      ],
      //
    });

    console.log(JSON.stringify(party));

    let response = {
      party: party,
    };
    res.send(response);
  } catch (error) {
    console.log(error);
  }
});
//modifica il party con id
router.put("/:id", (req, res) => {});
//elimina il party d'id
router.delete("/:id", (req, res) => {});

router.get("/:id/comments", (req, res) => {
  //Aggiungere richiesta al db
});

//aggiunge un commento
router.post("/:id/comment", async function (req, res) {
  const sourceId = req.body.userId;
  const commentTxt = req.body.commentTxt;
  const partyId = req.params.id;
  let newCommObj = {
    text: commentTxt,
    partyId: partyId,
    userId: sourceId,
  };

  console.log(newCommObj);
  try {
    //COME SI AGGIUNGONO ELEMENTI ALLE JOIN TABLE???
    const newComm = await Comment.create(newCommObj);
    let not = {
      source: sourceId,
      party: partyId,
      event: "newComment",
      comment: newComm.id,
      state: true,
    };
    console.log(not);
    broadcast(not);
  } catch (error) {
    console.error(error);
  }
});

router.post(":id/invitation/", async function (req, res) {
  //L'id di colui che invita lo prendo dalla session
  //  :email sara' un array che contiene le mail degli invitati
  //fai un ciclo dove notifichi ad uno ad uno tutti i [artecipanti con notificate()

  const inviterId = req.sessione.userId;
  const invited = req.body.email;
  const partyId = req.id;

  for (email in invited) {
    try {
      const user = await User.find({ raw: true, where: { email: email } });
      const invitedId = user.id;
      let not = {
        source: inviterId,
        destination: invitedId,
        party: partyId,
        comment: 0,
        event: "newInvitation",
        state: true,
      };
      console.log(not);
      notificate(not);
    } catch (error) {
      console.error(error);
    }
  }
});

router.post("/:id/joined", async function (req, res) {
  const partyId = req.body.id;
  const partecipantId = req.body.session.userId;

  //Aggiungo il parctecipante all'evento
  // ???????? UserParty
  //Aggiungi colonna pending, rejected accepted nella UserParty

  const not = {
    source: partecipantId,
    party: partyId,
    event: "joined",
    comment: [],
    state: true,
  };

  try {
    await broadcast(not);
  } catch (error) {
    console.error(error);
  }
});

//Non serve
//visualizza un commento
router.get("/:party_id/comments/:comment_id", (req, res) => {});

//elimina un commento
router.delete("/:party_id/comments/:comment_id", (req, res) => {});

module.exports = router;
