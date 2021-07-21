const engineer = []
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
    const modalTitle = document.querySelector(".modal-title")
    const modalImage = document.querySelector("#member-modal-image")
    const modalPhone = document.querySelector("#member-modal-phone")
    const modalEmail = document.querySelector("#member-modal-email")
    fetch("engineer.json")
        .then((data) => data.json('engineer'))
        .then((result) => {
            // console.log(result)
            const member = result.engineer.map((item) => {
                if (item.id == id) {
                    modalTitle.innerHTML = `工程師：${item.name}`
                    modalPhone.innerHTML = `phone: ${item.phone}`
                    modalEmail.innerHTML = `email: ${item.email}`
                    modalImage.innerHTML = `
                    <img src="${item.avatar}" alt="avatar" class="img-fluid" style="border-radius: 50%;">`
                }
            })
            return member
        })
}

dataPanel.addEventListener('click', function onPanelClicked(event) {
    if (event.target.matches('.btn-show-member')) {
        const id = event.target.dataset.id
        showNameCardModel(id)
    }
})

fetch("engineer.json")
    .then((data) => data.json('engineer'))
    .then((result) => {
        // console.log(result)
        engineer.push(...result.engineer)
        renderEngineerList(engineer)
    })
    .catch((error) => console.log(error))