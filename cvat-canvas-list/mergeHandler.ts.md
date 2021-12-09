mergeHandler.ts.md
interface MergeHandler
	method cancel
	method merge
	method repeatSelection
	method select
class MergeHandlerImpl
	constructor constructor
	method addConstraints
		property labelID
		variable shape
		property shapeType
	method cancel
	property canvas
	method checkConstraints
	method closeMerging
		variable statesToBeMerged
	property constraints
	property highlightedShapes
	property initialized
	method initMerging
	method merge
	property onFindObject
	property onMergeDone
	method release
		variable shape
		variable state
	method removeConstraints
	method repeatSelection
		variable objectState
		variable shape
	method select
		variable includes
		variable shape
		variable shape
		variable stateFrames
			function statesToBeMerged.map() callback
		variable stateIndexes
			function statesToBeMerged.map() callback
	property startTimestamp
	property statesToBeMerged