canvasView.ts.md
interface CanvasView
	method html
class CanvasViewImpl
	constructor constructor
		property attributeID
		property clientID
		function content.addEventListener('dblclick') callback
		function content.addEventListener('mousedown') callback
		function content.addEventListener('mousemove') callback
			variable event
				property bubbles
				property cancelable
				property detail
					property states
					property x
					property y
			variable offset
			variable x
			variable y
		function content.addEventListener('wheel') callback
			property bubbles
			property cancelable
			variable offset
			variable point
		variable contentDefs
		function contentDefs.pattern() callback
		function contentDefs.pattern() callback
		property drawHidden
		variable gridDefs
		variable gridRect
		property id
		property id
		variable loadingCircle
		function oncontextmenu
		property patternTransform
		property patternTransform
		property patternUnits
		property patternUnits
		variable self
		function window.document.addEventListener('mouseup') callback
	method activate
		property <unknown>
		variable attributeID
		variable clientID
		property clientID
	method activateAttribute
		property <unknown>
		property attributeID
		variable span
		variable text
	method activateShape
		property bubbles
		property cancelable
		property detail
			property state
		variable hideDirection
		variable hideText
		function on('dragend') callback
			property bubbles
			property cancelable
			variable delta
			property detail
				property id
			variable dx2
			variable dy2
			variable offset
			variable p1
			variable p2
			variable points
				function map() callback
		function on('dragstart') callback
		function on('resizedone') callback
			property bubbles
			property cancelable
			property detail
				property id
			variable offset
			variable points
				function map() callback
		function on('resizestart') callback
		function on('resizing') callback
		variable resized
		variable shape
		variable shapeSizeElement
		variable showDirection
		variable showProjections
		variable showText
		property snapToGrid
		variable state
		variable text
	property activeElement
	method addCuboid
		variable cube
			property clientID
			property 'color-rendering'
			property 'data-z-order'
			property fill
			property id
			property 'shape-rendering'
			property stroke
			property 'stroke-width'
	method addObjects
		variable displayAllText
		function on('click.canvas') callback
			property bubbles
			property cancelable
			property detail
				property state
		variable points
		variable state
		variable stringified
		variable translatedPoints
	method addPoints
		variable group
		function remove
		variable shape
			property 'color-rendering'
			property fill
			property opacity
			property 'pointer-events'
			property 'shape-rendering'
			property 'stroke-width'
	method addPolygon
		variable polygon
			property clientID
			property 'color-rendering'
			property 'data-z-order'
			property fill
			property id
			property 'shape-rendering'
			property stroke
			property 'stroke-width'
	method addPolyline
		variable polyline
			property clientID
			property 'color-rendering'
			property 'data-z-order'
			property fill
			property id
			property 'shape-rendering'
			property stroke
			property 'stroke-width'
	method addRect
		variable rect
			property clientID
			property 'color-rendering'
			property 'data-z-order'
			property fill
			property id
			property 'shape-rendering'
			property stroke
			property 'stroke-width'
		variable xbr
		variable xtl
		variable ybr
		variable ytl
	method addText
		function adoptedText.text() callback
			variable attrID
			property attrID
			property dy
			variable value
			property x
		variable attributes
		variable attrNames
			function label.attributes.reduce() callback
		variable clientID
		variable label
		variable source
		variable undefinedAttrValue
	property adoptedContent
	property adoptedText
	property attachmentBoard
	property autoborderHandler
	property background
	property bitmap
	property canvas
	property configuration
	property content
	property controller
	method deactivate
	method deactivateAttribute
		property <unknown>
		variable attributeID
		property attributeID
		variable clientID
		variable span
		variable text
	method deactivateShape
		property <unknown>
		variable clientID
		property clientID
		variable displayAllText
		variable drawnState
		variable shape
		variable text
	property drawHandler
	property drawnIssueRegions
	property drawnStates
	property editHandler
	property geometry
	property grid
	property gridPath
	property gridPattern
	property groupHandler
	method hideDirection
		variable direction
		variable directions
		variable handler
		variable instance
		variable nested
		variable node
	method html
	property interactionHandler
	method isServiceHidden
	property issueRegionPattern_1
	property issueRegionPattern_2
	property loadingAnimation
	property mergeHandler
	property (get) mode
	property (set) mode
	method moveCanvas
		variable obj
		variable obj
	method notify
		variable activeElement
		variable bbox
		property bubbles
		property bubbles
		property bubbles
		property bubbles
		property bubbles
		property bubbles
		property bubbles
		property cancelable
		property cancelable
		property cancelable
		property cancelable
		property cancelable
		property cancelable
		property cancelable
		variable clientID
		variable ctx
		variable data
		variable data
		variable data
		variable data
		variable data
		variable event
		variable event
			property detail
				property exception
		variable i
		variable i
		variable image
		variable imageBitmap
		variable object
		variable padding
		variable size
	method onDrawDone
		variable clientID
		property enabled
		variable event
			property bubbles
			property cancelable
		variable event
			property bubbles
			property cancelable
			property detail
				property continue
				property duration
				property state
					property data
					property zOrder
		variable event
			property bubbles
			property cancelable
		variable hidden
		variable hiddenBecauseOfDraw
			function map() callback
		variable points
		variable state
		variable zLayer
	method onEditDone
		variable event
			property bubbles
			property cancelable
			property detail
				property points
				property state
		variable event
			property bubbles
			property cancelable
	method onFindObject
		variable event
			property bubbles
			property cancelable
			property detail
				property states
				property x
				property y
		variable offset
		variable x
		variable y
	method onFocusRegion
		property <unknown>
		variable canvasOffset
		variable canvasX
		variable canvasY
		variable cx
		variable cy
		variable dragged
			property <unknown>
			property left
			property scale
			property top
		variable scale
		property scale
	method onGroupDone
		property enabled
		variable event
			property bubbles
			property cancelable
			property detail
				property states
		variable event
			property bubbles
			property cancelable
	method onInteraction
		property enabled
		variable event
			property bubbles
			property cancelable
			property detail
				property isDone
				property shapes
				property shapesUpdated
				property threshold
				property zOrder
		variable event
			property bubbles
			property cancelable
		variable zLayer
	method onMergeDone
		property enabled
		variable event
			property bubbles
			property cancelable
			property detail
				property duration
				property states
		variable event
			property bubbles
			property cancelable
	method onRegionSelected
		variable event
			property bubbles
			property cancelable
			property detail
				property points
		variable event
			property bubbles
			property cancelable
	method onSplitDone
		property enabled
		variable event
			property bubbles
			property cancelable
			property detail
				property frame
				property state
		variable event
			property bubbles
			property cancelable
	method redrawBitmap
		variable ctx
		variable height
		variable i
		variable i
		variable j
		variable points
		variable points
		variable state
		variable states
		variable width
	property regionSelector
	method resizeCanvas
		variable obj
		variable obj
	method saveState
		property attributes
			property <unknown>
		property clientID
		property frame
		property hidden
		property label
		property lock
		property occluded
		property outside
		property pinned
		property points
		property shapeType
		property source
		property updated
		property zOrder
	method selectize
		function contextMenuHandler
			property bubbles
			property cancelable
			property detail
				property mouseEvent
				property objectState
				property pointID
			variable pointID
			variable state
		function dblClickHandler
			variable points
			variable state
		property deepSelect
		property deepSelect
		variable handler
		function mousedownHandler
			property bubbles
			property cancelable
			property enabled
			variable pointID
			property pointID
			variable points
			variable state
			property state
		property pointSize
		method pointType
			variable circle
				property 'fill-opacity'
				property 'stroke-width'
			function circle.on('mouseenter') callback
				property 'stroke-width'
			function circle.on('mouseleave') callback
				property 'stroke-width'
		property rotationPoint
		variable self
	property serviceFlags
	method setupIssueRegions
		property fill
		property fill
		property fill
		property id
		property id
		property id
		variable issueRegion
		variable issueRegion
		variable points
		variable stringified
		variable stringified
		property 'stroke-width'
		property 'stroke-width'
	method setupObjects
		variable clientID
		variable created
		variable deleted
			function filter() callback
			function map() callback
			function map() callback
		variable drawnState
		variable newIDs
			function states.map() callback
		variable state
		variable state
		function states.map() callback
		variable updated
	method setupPoints
		variable group
			property clientID
			property 'data-polyline-id'
			property 'data-z-order'
			property id
		function group.on('click.canvas') callback
	method setupServiceHidden
		variable shape
		variable state
		variable text
	method showDirection
		variable angle
		variable baseVector
			property i
			property j
		variable baseVectorLength
		variable cosinus
		variable cx
		variable cy
		variable firstCircle
		variable firstPoint
		variable handler
		variable path
		variable pathElement
			property color
			property transform
			property 'transform-origin'
			property width
		function pathElement.on('click') callback
			variable reversedPoints
			variable reversedPoints
		variable points
		variable secondCircle
		variable secondPoint
		variable xAxis
			property i
			property j
	method sortObjects
		variable crosshair
		function crosshair.forEach() callback
		variable interaction
		function interaction.forEach() callback
		variable needSort
			function states.some() callback
		variable sorted
			function states.sort() callback
		function sorted.forEach() callback
		function sorted.map() callback
		variable states
			function map() callback
	property splitHandler
	method stateIsLocked
		variable configuration
	method stringifyToCanvas
		function points.reduce('') callback
	property svgShapes
	property svgTexts
	property text
	method transformCanvas
		variable angle
		variable element
		variable element
		variable element
		function forEach() callback
		property height
		variable issueRegion
		variable key
		variable key
		variable obj
		variable object
		variable pattern
		variable previousWidth
		property 'stroke-width'
		property transform
		property width
	method translateFromCanvas
		variable offset
		function points.map() callback
	method translateToCanvas
		variable offset
	method updateObjects
		variable activeElement
			property <unknown>
		variable attrID
		variable clientID
		variable drawnState
		property height
		variable isInvisible
		variable prefix
		variable shape
		variable span
		variable state
		function state.points.some() callback
		variable stringified
		variable text
		variable translatedPoints
		property width
		property x
		variable xbr
		variable xtl
		property y
		variable ybr
		variable ytl
	method updateTextPosition
		variable box
		variable clientX
		variable clientY
		property height
		variable tspan
		property width
		variable x
		property x
		variable x1
		variable x2
		variable y
		property y
		variable y1
		variable y2
	property zoomHandler