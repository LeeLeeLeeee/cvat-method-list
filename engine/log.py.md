log.py.md
function _get_project
	variable pid
function _get_task
	variable tid
function _get_job
	variable jid
function _get_storage
	variable storage_id
function get_logger
	variable logger_name
	variable log_file
	variable logger
	variable file_handler
	variable formatter
class ProjectLoggerStorage
	method __init__
	method __getitem__
		variable pid
	method _create_project_logger
		variable pid
		variable project
		variable logger
		variable server_file
		variable formatter
	variable _storage
class TaskLoggerStorage
	method __init__
	method __getitem__
		variable tid
	method _create_task_logger
		variable tid
		variable task
		variable logger
		variable server_file
		variable formatter
	variable _storage
class JobLoggerStorage
	method __init__
	method __getitem__
		variable jid
	method _get_task_logger
		variable jid
		variable job
	variable _storage
class CloudSourceLoggerStorage
	method __init__
	method __getitem__
		variable sid
	method _create_cloud_storage_logger
		variable sid
		variable cloud_storage
		variable logger
		variable server_file
		variable formatter
	variable _storage
class ProjectClientLoggerStorage
	method __init__
	method __getitem__
		variable pid
	method _create_client_logger
		variable pid
		variable project
		variable logger
		variable client_file
	variable _storage
class TaskClientLoggerStorage
	method __init__
	method __getitem__
		variable tid
	method _create_client_logger
		variable tid
		variable task
		variable logger
		variable client_file
	variable _storage
class JobClientLoggerStorage
	method __init__
	method __getitem__
		variable jid
	method _get_task_logger
		variable jid
		variable job
	variable _storage
class dotdict
	variable __getattr__
	variable __setattr__
	variable __delattr__
variable clogger
variable slogger