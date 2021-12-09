annotations-collection.js.md
function <function>
	variable <unknown>
	variable AnnotationsFilter
	variable ArgumentError
	variable checkObjectType
	class Collection
		constructor constructor
			function data.labels.reduce() callback
			property frameMeta
			property groupColors
			property groups
			property history
			property labels
			property max
		method clear
		method export
			variable data
				property shapes
					function filter() callback
					function map() callback
					function reduce() callback
				property tags
					function filter() callback
					function map() callback
					function reduce() callback
				property tracks
					function map() callback
					function tracks.filter() callback
		method get
			variable filtered
			variable object
			variable objects
			variable objectStates
			variable shapes
			variable stateData
			variable tags
			variable tracks
			variable visible
				property data
				property models
			function visible.data.forEach() callback
				variable model
				variable objectState
		method group
			variable groupIdx
			function history.do() callback
				function objectsForGroup.forEach() callback
			function history.do() callback
				function objectsForGroup.forEach() callback
			variable object
			variable objectsForGroup
				function objectStates.map() callback
					variable object
			function objectsForGroup.map() callback
			variable redoGroups
				function objectsForGroup.map() callback
			variable undoGroups
				function objectsForGroup.map() callback
		method import
			variable clientID
			variable clientID
			variable clientID
			variable color
			variable result
				property shapes
				property tags
				property tracks
			variable shape
			variable shapeModel
			variable tag
			variable tagModel
			variable track
			variable trackModel
		method merge
			variable attributes
			property attributes
				function reduce() callback
					property spec_id
					property value
			property attributes
				function reduce() callback
					property spec_id
					property value
			variable attrID
			variable clientID
			variable firstNonOutside
			variable frame
			property frame
			property frame
			function history.do() callback
				variable object
			function history.do() callback
				variable object
			variable i
			variable keyframe
			variable keyframes
			variable label
			variable labelAttributes
				function label.attributes.reduce() callback
			variable object
			variable object
			variable objectsForMerge
				function objectStates.map() callback
					variable object
			function objectsForMerge.map() callback
			property occluded
			property occluded
			property outside
			property outside
			property points
			property points
			variable shape
			variable shapeType
			function sort() callback
			variable state
			variable track
				property attributes
					function reduce() callback
						property spec_id
						property value
				property frame
					function map() callback
				property group
				property label_id
				property shapes
				property source
			variable trackModel
			property type
			property type
			variable updatedAttributes
			property zOrder
			property zOrder
		method put
			variable attributes
			property attributes
				function attributes.filter() callback
			property attributes
			property attributes
			variable constructed
				property shapes
				property tags
				property tracks
			function convertAttributes
				property spec_id
				variable specID
				variable value
				property value
			variable coord
			property frame
			property frame
			property frame
			property group
			property group
			property group
			function history.do() callback
				function importedArray.forEach() callback
			function history.do() callback
				function importedArray.forEach() callback
			variable imported
			variable importedArray
			function importedArray.map() callback
			function importedArray.map() callback
			property label_id
			property label_id
			property label_id
			variable labelAttributes
				function state.label.attributes.reduce() callback
			property occluded
			property points
			property shapes
				property attributes
					function attributes.filter() callback
				property frame
				property occluded
				property outside
				property points
				property type
				property z_order
			property source
			property source
			variable state
			property type
			property z_order
		method search
			variable containsDifficultProperties
			variable deepSearch
				variable filtered
				variable middle
				variable next
				variable prev
				variable shapesData
					function tracks.map() callback
			variable deepSearchFrom
				function map() callback
			function filter() callback
			variable filtered
			variable filtersStr
			variable frame
			variable keyframesMemory
			variable predicate
			variable reducer
			variable sign
			variable statesData
				function filter() callback
				function filter() callback
				function map() callback
				function map() callback
			variable track
			variable trackIsSatisfy
			variable tracks
				function filter() callback
				function filter() callback
			function tracks.map() callback
			variable update
			variable withDeepSearch
		method searchEmpty
			variable filteredTracks
				function tracks.filter() callback
			variable first
			variable found
			variable frame
			variable isKeyfame
			variable keyframes
			variable last
			variable lastShape
			variable predicate
			variable prev
			variable sign
			function some() callback
			function some() callback
			variable track
			variable update
		method select
			variable distance
			property distance
			variable minimumDistance
			variable minimumState
			variable object
			variable state
			property state
		method split
			variable clientID
			variable exported
			function exported.shapes.map() callback
			function history.do() callback
			function history.do() callback
			variable keyframes
				function sort() callback
			variable labelAttributes
				function object.label.attributes.reduce() callback
			variable next
			variable nextTrack
			variable object
			variable position
				property attributes
					function reduce() callback
						property spec_id
						property value
				property frame
				property occluded
				property outside
				property points
				property type
				property zOrder
			variable prev
				property attributes
				property frame
				property group
				property label_id
				property shapes
			variable prevTrack
		method statistics
			variable interpolated
			variable interpolated
			variable key
			variable keyframe
			variable keyframes
				function map() callback
				function sort() callback
			variable label
			variable label
			variable label
			variable labels
			variable lastKey
			variable name
			variable object
			variable objectType
			variable objectType
			variable prevKeyframe
			variable shapeType
			variable skeleton
				property cuboid
					property shape
					property track
				property interpolated
				property manually
				property points
					property shape
					property track
				property polygon
					property shape
					property track
				property polyline
					property shape
					property track
				property rectangle
					property shape
					property track
				property tags
				property total
			variable total
			variable visible
	variable colors
	variable CuboidShape
	variable CuboidTrack
	variable DataError
	variable HistoryActions
	variable Label
	variable ObjectShape
	variable ObjectState
	variable objectStateFactory
	variable ObjectType
	variable PointsShape
	variable PointsTrack
	variable PolygonShape
	variable PolygonTrack
	variable PolylineShape
	variable PolylineTrack
	variable RectangleShape
	variable RectangleTrack
	variable ScriptingError
	variable Shape
	function shapeFactory
		variable color
		variable shapeModel
		variable type
	variable Statistics
	variable Tag
	variable Track
	function trackFactory
		variable color
		variable trackModel
		variable type
