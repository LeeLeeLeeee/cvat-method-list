canvasController.ts.md
interface CanvasController
	property activeElement
	property configuration
	method disableDrag
	method drag
	method draw
	property drawData
	method enableDrag
	method fit
	property focusData
	property geometry
	method group
	property groupData
	method interact
	property interactionData
	property issueRegions
	method merge
	property mergeData
	property mode
	property objects
	property selected
	method selectRegion
	method split
	property splitData
	property zLayer
	method zoom
class CanvasControllerImpl
	constructor constructor
	property (get) activeElement
	property (get) configuration
	method disableDrag
	method drag
		variable leftOffset
		variable topOffset
		property x
		property y
	method draw
	property (get) drawData
	method enableDrag
		property x
		property y
	method fit
	property (get) focusData
	property (get) geometry
	property (set) geometry
	method group
	property (get) groupData
	method interact
	property (get) interactionData
	property isDragging
	property (get) issueRegions
	property lastDragPosition
	method merge
	property (get) mergeData
	property (get) mode
	property (set) mode
	property model
	property (get) objects
	property (get) selected
	method selectRegion
	method split
	property (get) splitData
	property (get) zLayer
	method zoom
