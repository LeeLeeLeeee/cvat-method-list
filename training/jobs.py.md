jobs.py.md
function save_prediction_server_status_to_cache_job
	variable cache_key
	variable cvat_project_id
	variable timeout
	variable cvat_project
	variable api
	variable status
	variable resp
function save_frame_prediction_to_cache_job
	variable cache_key
	variable task_id
	variable frame
	variable timeout
	variable task
	variable training_project_image
	variable cvat_labels
	variable training_project
	variable api
	variable image
	variable labels_mapping
	variable annotation
	variable resp
function upload_images_job
	variable task_id
	variable task
	variable frame_provider
	variable frames
	variable api
	variable i
	variable buffer
	variable training_image_id
function __add_fields_to_shape
	variable shape
	variable frame
	variable data
	variable labels_mapping
	variable image
function upload_annotation_to_training_project_job
	variable job_id
	variable cvat_job
	variable cvat_project
	variable training_project
	variable start
	variable stop
	variable data
	variable shapes
	variable frames_data
	variable api
	variable cvat_labels
	variable labels_mapping
	variable frame
	variable frame_shapes
	variable training_project_image
function create_training_project_job
	variable project_id
	variable cvat_project
	variable training_project
	variable api
function create_training_project
	variable cvat_project
	variable training_project
	variable api
	variable labels
	variable training_project_resp
	variable cvat_label
	variable training_label
function upload_images
	variable cvat_project_id
	variable training_id
	variable api
	variable project
	variable tasks
	variable task
	variable frame_provider
	variable frames
	variable i
	variable buffer
	variable training_image_id
