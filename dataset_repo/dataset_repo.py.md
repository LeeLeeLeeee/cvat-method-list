dataset_repo.py.md
function _have_no_access_exception
	variable ex
	variable keys
function _read_old_diffs
	variable diff_dir
	variable summary
	variable diff_files
	variable diff_file
	variable diff
	variable action_key
class Git
	method __init__
		variable db_git
		variable db_task
		variable user
	method _parse_url
		variable host_pattern
		variable http_pattern
		variable ssh_pattern
		variable http_match
		variable ssh_match
		variable user
		variable host
		variable repos
		variable ex
	method _create_master_branch
		variable readme_md_name
	method _to_task_branch
	method _update_config
		variable cw
	method _configurate
	method _ssh_url
		variable user
		variable host
		variable repos
	method _clone
		variable ssh_url
	method _reclone
		variable tmp_repo
		variable ex
	method _pull
	method init_repos
		variable wo_remote
	method push
		variable user
		variable scheme
		variable host
		variable db_task
		variable last_save
		variable updated
		variable lfs_settings
		variable gitattributes
		variable lines
		variable setting
		variable timestamp
		variable format_name
		variable dump_name
		variable ext
		variable archive
		variable f
		variable output
		variable summary_diff
		variable old_diffs_dir
		variable diff_name
		variable diff
		variable key
		variable message
	method remote_status
		variable last_save
		variable last_hash
		variable merge_base_hash
	variable _db_git
	variable _url
	variable _path
	variable _tid
	variable _user
	variable _cwd
	variable _diffs_dir
	variable _task_mode
	variable _task_name
	variable _branch_name
	variable _annotation_file
	variable _sync_date
	variable _lfs
	variable _rep
function initial_create
	variable tid
	variable git_path
	variable lfs
	variable user
	variable db_task
	variable path_pattern
	variable path_search
	variable path
	variable anno_file
	variable _split
	variable db_git
	variable _git
	variable ex
function push
	variable tid
	variable user
	variable scheme
	variable host
	variable db_task
	variable db_git
	variable _git
	variable ex
function get
	variable tid
	variable user
	variable response
	variable db_task
	variable db_git
	variable rq_id
	variable queue
	variable rq_job
	variable _git
	variable ex
function update_states
	variable db_git_records
	variable db_user
	variable db_git
function _onsave
	variable jid
	variable data
	variable action
	variable db_task
	variable db_git
	variable diff_dir
	variable diff_dir_v2
	variable summary
	variable diff_files
	variable last_num
	variable f
	variable number
