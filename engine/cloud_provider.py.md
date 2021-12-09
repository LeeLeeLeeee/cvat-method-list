cloud_provider.py.md
class Status
	constant AVAILABLE
	constant NOT_FOUND
	constant FORBIDDEN
	method choices
	method __str__
class _CloudStorage
	method __init__
	method name
	method create
	method _head_file
		variable key
	method _head
	method get_status
	method get_file_status
		variable key
	method get_file_last_modified
		variable key
	method initialize_content
	method download_fileobj
		variable key
	method download_file
		variable key
		variable path
		variable file_obj
		variable f
	method upload_file
		variable file_obj
		variable file_name
	method __contains__
		variable file_name
	method __len__
	method content
	variable _files
function get_cloud_storage_instance
	variable cloud_provider
	variable resource
	variable credentials
	variable specific_attributes
	variable instance
class AWS_S3
	variable transfer_config
	method __init__
		variable bucket
		variable region
		variable access_key_id
		variable secret_key
		variable session_token
	method bucket
	method name
	method _head
	method _head_file
		variable key
	method get_status
		variable ex
		variable code
	method get_file_status
		variable key
		variable ex
		variable code
	method get_file_last_modified
		variable key
	method upload_file
		variable file_obj
		variable file_name
	method initialize_content
		variable files
	method download_fileobj
		variable key
		variable buf
	method create
		variable responce
		variable ex
		variable msg
	variable _s3
	variable _client_s3
	variable _bucket
	variable region
	variable _files
class AzureBlobContainer
	constant MAX_CONCURRENCY
	method __init__
		variable container
		variable account_name
		variable sas_token
	method container
	method name
	method account_url
	method create
		variable msg
	method _head
	method _head_file
		variable key
		variable blob_client
	method get_file_last_modified
		variable key
	method get_status
		variable ex
	method get_file_status
		variable key
		variable ex
	method upload_file
		variable file_obj
		variable file_name
	method initialize_content
		variable files
	method download_fileobj
		variable key
		variable buf
		variable storage_stream_downloader
	variable _account_name
	variable _blob_service_client
	variable _container_client
	variable _files
class GOOGLE_DRIVE
function _define_gcs_status
	variable func
	function wrapper
		variable key
class GoogleCloudStorage
	method __init__
		variable bucket_name
		variable prefix
		variable service_account_json
		variable project
		variable location
		variable bucket
	method bucket
	method name
	method _head
	method _head_file
		variable key
		variable blob
	method get_status
	method get_file_status
		variable key
	method initialize_content
	method download_fileobj
		variable key
		variable buf
		variable blob
	method upload_file
		variable file_obj
		variable file_name
	method create
		variable ex
		variable msg
	method get_file_last_modified
		variable key
		variable blob
	variable _storage_client
	variable _bucket
	variable _bucket_location
	variable _prefix
	variable _files
class Credentials
	variable __slots__
	variable key
	variable secret_key
	variable session_token
	variable account_name
	variable key_file_path
	variable credentials_type
	method __init__
		variable credentials
	method convert_to_db
		variable converted_credentials
	method convert_from_db
		variable credentials
	method mapping_with_new_values
		variable credentials
	method values