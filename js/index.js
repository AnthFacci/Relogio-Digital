const hr = document.getElementById('horas')
const min = document.getElementById('minutos')
const seg = document.getElementById('segundos')
const ChangeBg = document.getElementById('bg')
const mContent = document.querySelector('main')

   const relogio = setInterval(function time(){
        
       let dataHoje = new Date()
       let horas = dataHoje.getHours()
       let minutos = dataHoje.getMinutes()
       let segundos = dataHoje.getSeconds()
       
       hr.innerHTML = horas + ":"
       min.innerHTML = minutos + ":"
       seg.innerHTML = segundos     
    })


    ChangeBg.addEventListener('click', () =>{
        let fWallpaper = 'https://i.pinimg.com/originals/00/11/ac/0011ace89f00fedf690e6769290f21e3.gif'
        let sWallpaper = 'https://i.pinimg.com/originals/de/7b/d6/de7bd6a32ee6aba8ab6da671aa4df54b.gif'
        let tWallpaper = 'https://i.pinimg.com/originals/c5/c6/5b/c5c65bdf726853eb5c4e5384418bab5a.gif'
        let ffWallpaper = 'https://i.pinimg.com/originals/74/5c/c9/745cc90fcc688569610f84bc5d2b2fd6.gif'
        if(mContent.dataset.bg === "1" ) {
            mContent.style.backgroundImage = `url(${fWallpaper})`
            mContent.dataset.bg = "2"
        } 
        else if(mContent.dataset.bg === "2" ) {
            mContent.style.backgroundImage = `url(${sWallpaper})`
            
            mContent.dataset.bg = "3"
    }else if(mContent.dataset.bg === "3" ) {
        mContent.style.backgroundImage = `url(${tWallpaper})`
        mContent.dataset.bg = "4"
    
}else if(mContent.dataset.bg === "4" ) {
    mContent.style.backgroundImage = `url(${ffWallpaper})`
    
    mContent.dataset.bg = "1"

}
})

    



    
    