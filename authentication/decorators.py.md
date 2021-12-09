decorators.py.md
function login_required
	variable function
	variable redirect_field_name
	variable login_url
	variable redirect_methods
	function decorator
		variable view_func
		function _wrapped_view
			variable request
			variable args
			variable kwargs
			variable tokenAuth
			variable auth
			variable login_url
