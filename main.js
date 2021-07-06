const engineer = [
    {
        id: 1,
        name: "林永剛",
        avatar: "./image/muscle.jpg",
        phone: "0925-090-801",
        email: "move1214@hotmail.com"
    },
    {
        id: 2,
        name: "張文千",
        avatar: "./image/muscle.jpg",
        phone: "0937-182-391",
        email: "mika.cwc.tt@gmail.com"
    },
    {
        id: 3,
        name: "林佳慶",
        avatar: "./image/muscle.jpg",
        phone: "0927-002-205",
        email: "daniel650807@hotmail.com"
    },
    {
        id: 4,
        name: "顏銘辰",
        avatar: "./image/muscle.jpg",
        phone: "0918-153-575",
        email: "n49517028@gmail.com"
    },
    {
        id: 5,
        name: "邱炳盛",
        avatar: "./image/muscle.jpg",
        phone: "0989-203-216",
        email: "n49517044@gmail.com"
    },
    {
        id: 6,
        name: "葉詠展",
        avatar: "./image/詠展jpg",
        phone: "0958-206-320",
        email: "ya66321@gmail.com"
    }
]
// const engineer = require('./engineer.json')

const dataPanel = document.querySelector("#data-panel")

function renderEngineerList(data) {
    let rawHTML = ""
    data.forEach(item => {
        rawHTML += `
        <div class="col-sm-4">
            <div class="mb-2">
                <div class="card text-center">
                    <label class="card-body">
                        <h3 class="card-title" id="member-modal-title">${item.name}</h3>
                        <button type="button" class="btn btn-outline-warning btn-show-member far fa-address-card fa-2x" data-toggle="modal" data-target="#nameCard" data-id="${item.id}"></button>
                    </label>
                </div>
            </div>
        </div>`
    })
    dataPanel.innerHTML = rawHTML
}

function showNameCardModel(id) {
    const modalTitle = document.querySelector("#member-modal-title")
    const modalImage = document.querySelector("#member-modal-image")
    const modalPhone = document.querySelector("#member-modal-phone")
    const modalEmail = document.querySelector("#member-modal-email")
    // const { id, name, avatar, phone, email } = engineer
    // const data = engineer.data
    // const nameCard = document.querySelector("#nameCard")
    // const id = engineer.results
    // nameCard.findById(id).then(data => {
    // if (nameCard.id === id) {
        // axios.get(id).then((data) => {
            const data = engineer.find((item) => item.id === id)
            modalTitle.innerHTML = `${data.name}`
            modalPhone.innerHTML = `phone: ${data.phone}`
            modalEmail.innerHTML = `email: ${data.email}`
            modalImage.innerHTML = `
            <img src="${data.avatar}" alt="avatar">`
        // })
        
    // }
    // })
}


dataPanel.addEventListener('click', function onPanelClicked(event) {
    if (event.target.matches('.btn-show-member')) {
        const id = event.target.dataset.id
        showNameCardModel(id)
    }
})

renderEngineerList(engineer)