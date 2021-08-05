const projectPhoto = []
const photoData = document.querySelector("#photo-data")

function renderProjectPhoto(data) {
    let rawHTML = ""
    data.forEach(item => {
        rawHTML += `
        <div class="card">
            <img class="card-img-top" src="${item.img}" alt="Card image cap">
            <div class="card-body">
                <div class="station-wrapper">
                    <div class="box">
                        <h3>${item.oneword}</h3>
                    </div>
                    <div class="station">
                        <h4 class="card-text">${item.station}</h4>
                    </div>
                </div>
            </div>
        </div>
        `
    })
    photoData.innerHTML = rawHTML
}

fetch("projectPhoto.json")
    .then((data) => data.json('projectPhoto'))
    .then((result) => {
        projectPhoto.push(...result.projectPhoto)
        renderProjectPhoto(projectPhoto)
    })
    .catch((error) => console.log(error))