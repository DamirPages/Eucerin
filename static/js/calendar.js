import { initHandlersModal } from "../../components/modals/modals";

const elem = document.querySelector('#calendar');
const calendarInput = document.querySelector('#calendar-input');

const datepicker = new Datepicker(elem, {
    language: 'ru',
    format: 'yyyy-mm-dd',
    beforeShowDay: (date) => {
        let formatedDate = formatDate(date);
        let d = new Date(date);
        let dayName = d.toString().split(' ')[0];
        console.log(dayName);
        const day = ('0' + new Date(date).getDate()).slice(-2);
        let findedDateInfo = eventsList?.find(item => item.eventDate === formatedDate);        
        if(findedDateInfo){
            const classess = findedDateInfo.buy ? "day-has-event day-buy " + dayName : "day-has-event " + dayName;
            let time = "";
            let place = "";
            if(findedDateInfo.eventPlace){
                place = `<span class="calendar-popup-place"><b>Место проведения:</b> ${findedDateInfo.eventPlace}</span> `;
            }
            if(findedDateInfo.eventTime){
                time = `<span class="calendar-popup-time"><b>Время проведения мероприятия:</b> ${findedDateInfo.eventTime}</span> `;
            }

            return {
                classes: classess,
                content: `
                    ${day}
                    <span class="calendar-popup">
                        <span class="calendar-popup-title">
                            ${findedDateInfo.eventTitle} 
                        </span>   
                        ${place}
                        ${time}
                    </span>
                `,
            };
        }else{
            return dayName;
        }
    },
}); 
elem.addEventListener('changeDate', (e) => {
    calendarInput.value = datepicker.getDate('yyyy-mm-dd');
});
function formatDate(stringDate){
    const date = new Date(stringDate);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
}
initHandlersModal();