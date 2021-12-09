annotations-history.js.md
variable MAX_HISTORY_LENGTH
class AnnotationHistory
	constructor constructor
	method clear
	method do
		variable actionItem
			property action
			property clientIDs
			property frame
			property redo
			property undo
	method freeze
	method get
		property redo
			function _redo.map() callback
		property undo
			function _undo.map() callback
	method redo
		variable action
		variable affectedObjects
		variable i
	method undo
		variable action
		variable affectedObjects
		variable i
variable <unknown>
