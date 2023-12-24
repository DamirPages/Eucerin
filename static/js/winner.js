window.odometrInit = function(id, animation_time){
    const element = document.querySelector(id);
    const odometr = element.querySelector('.winner__odometr');
    const name = element.querySelector('.winner__name');
    const list = element.querySelector('.winner__list');

    let odometrInstance = new Odometer({
        el: odometr,
        value: '0000',
        format: 'd',
        minIntegerLen: 4,
    });

    odometrInstance.addItems = function(arr, cb){
        let newArr = arr;
        let interval = null;
        interval = setInterval(() => {
            if(newArr.length){
                let item = newArr.shift();
                odometrInstance.update(item[0]);
                setTimeout(()=>{
                    name.textContent = item[1];
                    list.insertAdjacentHTML('beforeend', `
                    <div class="winner__list-item">
                        <span>${item[1]}</span>
                        <span>${item[2]}</span>
                        <span>${item[3]}</span>
                    </div>
                    `);
                }, animation_time * 1000);
            }else if(cb){
                cb();
                clearInterval(interval);
            }
        }, (animation_time * 1000) + 200);
    }

    return odometrInstance;
}