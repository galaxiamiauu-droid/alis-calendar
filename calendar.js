const daysContainer = document.getElementById("days");
const monthYear = document.getElementById("monthYear");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");


let currentDate = new Date(2026, 6, 1); 
// 6 = Julio (los meses empiezan en 0)


function renderCalendar(){

    daysContainer.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();


    const firstDay = new Date(year, month, 1).getDay();

    const lastDay = new Date(year, month + 1, 0).getDate();


    const monthName = currentDate.toLocaleString(
        "es-ES",
        {
            month:"long"
        }
    );


    monthYear.textContent =
    `${monthName} ${year}`;


    // espacios antes del día 1
    for(let i = 0; i < firstDay; i++){

        const empty = document.createElement("div");
        daysContainer.appendChild(empty);

    }


    // crear días
    for(let day = 1; day <= lastDay; day++){

        const box = document.createElement("div");

        box.className = "day";


        const number = document.createElement("span");

        number.textContent = day;


        box.appendChild(number);



        // comprobar si hay publicación
        const fullDate =
        `${year}-${String(month+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;


      const post = null;


        if(post){

            const heart = document.createElement("span");

            heart.textContent = "♡";

            heart.className = "heart";


            box.appendChild(heart);


            box.onclick = () => {

                window.open(
                    post.url,
                    "_blank"
                );

            };


            box.title = post.title;

        }


        daysContainer.appendChild(box);

    }

}



prevBtn.onclick = () => {

    currentDate.setMonth(
        currentDate.getMonth() - 1
    );

    renderCalendar();

};



nextBtn.onclick = () => {

    currentDate.setMonth(
        currentDate.getMonth() + 1
    );

    renderCalendar();

};



renderCalendar();
