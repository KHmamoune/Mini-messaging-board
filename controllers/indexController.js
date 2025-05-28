messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello world!",
        user: "Charles",
        added: new Date()
    }
]

async function renderIndex(req, res) {
    res.render('index', { messages: messages })
}

async function renderForm(req, res) {
    res.render('form')
}

async function createMessage(req, res) {
    data = req.body

    messages.push(
        {
            text: data.message,
            user: data.username,
            added: new Date()
        }
    )

    res.redirect("/")
}

async function renderDetails(req, res) {
    res.render('details', { message: { text: req.query.text, user: req.query.username, added: req.query.added }})
}

module.exports = { renderIndex, renderForm, createMessage, renderDetails }
