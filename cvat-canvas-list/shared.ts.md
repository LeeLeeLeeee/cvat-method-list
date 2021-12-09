shared.ts.md
interface ShapeSizeElement
	method rm
	property sizeElement
	method update
interface Box
	property xbr
	property xtl
	property ybr
	property ytl
interface BBox
	property height
	property width
	property x
	property y
interface Point
	property x
	property y
interface Vector2D
	property i
	property j
interface DrawnState
	property attributes
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
function translateFromSVG
	variable i
	variable output
	variable pt
	variable transformationMatrix
function translateToSVG
	variable i
	variable output
	variable pt
	variable transformationMatrix
function displayShapeSize
	variable shapeSize
		method rm
		property sizeElement
			property weight
		method update
			variable bbox
			variable text
			variable x
			variable y
function pointsToNumberArray
	function map() callback
	function points.reduce() callback
function parsePoints
	function map() callback
		variable x
		property x
		variable y
		property y
	function source.reduce() callback
		property x
		property y
function stringifyPoints
	function points.map() callback
	function points.reduce('') callback
function clamp
function scalarProduct
function vectorLength
	variable sqrI
	variable sqrJ
function translateToCanvas
	function points.map() callback
variable PropType
