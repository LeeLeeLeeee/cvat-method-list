models.py.md
class GitStatusChoice
	constant NON_SYNCED
	constant SYNCING
	constant SYNCED
	constant MERGED
	method __str__
class GitData
	variable task
	variable url
	variable path
	variable sync_date
	variable status
	variable lfs
