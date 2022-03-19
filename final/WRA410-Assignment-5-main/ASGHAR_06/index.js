//We have to get the refrences from the html file and assign them to a vairiable\
const canvas = document.getElementById('drawingBoard')
const toolbar = document.getElementById('toolbar')

//create a context for the drawing element. This is part of the canvas tool in html
const ctx = canvas.getContext('2d')
const canvasOffsetX = canvas.offsetLeft
const canvasOffsetY = canvas.offsetTop

//create the canvas size. Size is the window minus the offset created above
canvas.width = window.innerWidth - canvasOffsetX
canvas.height = window.innerHeight



//Variable to track drawing, size and location
let isDrawing = false
let penWidth = 3
let startPosX
let startPosY


//event listener to check for a click. e represents event
toolbar.addEventListener('click', e => {
if(e.target.id === 'clear'){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
})


//event listener to see if a change has been made to the toolbar
toolbar.addEventListener('change', e => {
if(e.target.id === 'stroke'){
    ctx.strokeStyle = e.target.value
    }
if(e.target.id === 'lineWidth'){
    lineWidth = e.target.value
    }
})

//draw sfunction
const draw = (e) => {
    //if we aren't drawing do nothing
    if(!isDrawing){
        return
    }
    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'
    //this line removes the offset so that when you draw it is not drawing the offset distance away from your mouse
    ctx.lineTo(e.clientX - canvasOffsetX, e.clientY)
    ctx.stroke()
    
}

  
//this will control when a user is drawing. it checks when the mouse is pressed
canvas.addEventListener('mousedown', (e) =>{
    isDrawing = true
    startPosX = e.clientX
    startPosY = e.clientY
})


//we have to undo the event listener when they stop clicking down
canvas.addEventListener('mouseup', e =>{
    isDrawing = false
    ctx.stroke()
    ctx.beginPath()
})

//we need to check when the mouse is moveing so that you can draw conttinously
canvas.addEventListener('mousemove', draw)



console.log('we loaded the js file')
