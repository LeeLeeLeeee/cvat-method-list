editHandler.ts.md
interface EditHandler
	method cancel
	method configurate
	method edit
	method transform
class EditHandlerImpl
	constructor constructor
	property autoborderHandler
	property autobordersEnabled
	method cancel
	property canvas
	property clones
	method closeEditing
	method configurate
	method edit
	property editData
	property editedShape
	property editLine
	property geometry
	method initEditing
	property intelligentCutEnabled
	property onEditDone
	method release
		variable clone
	method selectPolygon
		property enabled
		variable offset
		variable points
			function map() callback
		variable state
	method setupEditEvents
		function canvas.on('mousedown.edit') callback
	method setupPoints
		property deepSelect
		property deepSelect
		property pointSize
		method pointType
			variable circle
				property 'stroke-width'
			function circle.node.addEventListener('mouseenter') callback
				property 'stroke-width'
			function circle.node.addEventListener('mouseleave') callback
				property 'stroke-width'
		property rotationPoint
		variable self
		variable stopEdit
	method setupTrailingPoint
		function circle.on('mousedown') callback
			property enabled
			variable offset
			variable points
				function map() callback
			variable state
			variable stringifiedPoints
		function circle.on('mouseenter') callback
			property 'stroke-width'
		function circle.on('mouseleave') callback
			property 'stroke-width'
		variable head
		variable minimumPoints
	method startEdit
		function canvas.on('mousemove.edit') callback
			variable delta
			variable deltaThreshold
			variable dxsqr
			variable dysqr
		variable clientX
		variable clientY
		property 'data-origin-client-id'
		variable dummyEvent
			property bubbles
			property cancelable
			property clientX
			property clientY
		property 'fill-opacity'
		variable lastDrawnPoint
			property x
			property y
		function on('drawstart drawpoint') callback
		function on('drawupdate') callback
			variable circle
		function on('drawupdate') callback
		property 'pointer-events'
		property snapToGrid
		property stroke
		variable strokeColor
	method stopEdit
		variable clone
		function clone.on('click') callback
		function clone.on('mouseenter') callback
		variable curveLength
			variable dxsqr
			variable dysqr
			variable i
			variable length
			variable points
				function indexes.map() callback
				function map() callback
				function map() callback
		variable cutIndexes1
			function oldPoints.reduce() callback
		variable cutIndexes2
			function oldPoints.reduce() callback
		property enabled
		variable firstPart
		variable lengthCriteria
		variable linePoints
		function map() callback
		variable offset
		variable oldPoints
		function on('mouseleave') callback
		variable points
		variable points
		variable pointsCriteria
		variable secondPart
		variable start
		variable state
		variable stop
		variable stopPointID
	method transform
		variable paintHandler
		variable point
		property 'stroke-width'
		property 'stroke-width'
