admin.py.md
class JobInline
	variable model
	variable can_delete
	method has_add_permission
		variable request
		variable obj
class SegmentInline
	variable model
	variable show_change_link
	variable readonly_fields
	variable can_delete
	method has_add_permission
		variable request
		variable obj
class AttributeSpecInline
	variable model
	variable extra
	variable max_num
class LabelInline
	variable model
	variable show_change_link
	variable extra
	variable max_num
class LabelAdmin
	method has_module_permission
		variable request
	variable inlines
class SegmentAdmin
	method has_module_permission
		variable request
	variable inlines
class ProjectAdmin
	variable date_hierarchy
	variable readonly_fields
	variable fields
	variable search_fields
	variable inlines
	method has_add_permission
		variable _request
class TaskAdmin
	variable date_hierarchy
	variable readonly_fields
	variable list_display
	variable search_fields
	variable inlines
	method has_add_permission
		variable request
class CloudStorageAdmin
	variable date_hierarchy
	variable readonly_fields
	variable list_display
	variable search_fields
	variable empty_value_display
	method has_add_permission
		variable request
