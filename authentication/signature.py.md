signature.py.md
constant QUERY_PARAM
constant MAX_AGE
class Signer
	method get_salt
		variable url
		variable normalized_url
		variable salt
	method sign
		variable user
		variable url
		variable data
	method unsign
		variable signature
		variable url
		variable User
		variable data
