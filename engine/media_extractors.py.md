media_extractors.py.md
function get_mime
	variable name
	variable type_name
	variable type_def
function create_tmp_dir
function delete_tmp_dir
	variable tmp_dir
function files_to_ignore
	variable directory
	variable ignore_files
class IMediaReader
	method __init__
		variable source_path
		variable step
		variable start
		variable stop
		variable dimension
	method __iter__
	method get_preview
	method get_progress
		variable pos
	method _get_preview
		variable obj
		constant PREVIEW_SIZE
		variable preview
	method get_image_size
		variable i
	method __len__
	method frame_range
	variable _source_path
	variable _step
	variable _start
	variable _stop
	variable _dimension
class ImageListReader
	method __init__
		variable source_path
		variable step
		variable start
		variable stop
		variable dimension
	method __iter__
		variable i
	method filter
		variable callback
		variable source_path
	method get_path
		variable i
	method get_image
		variable i
	method get_progress
		variable pos
	method get_preview
		variable fp
	method get_image_size
		variable i
		variable f
		variable properties
		variable img
	method reconcile
		variable source_files
		variable step
		variable start
		variable stop
		variable dimension
	method absolute_source_paths
	variable _dimension
class DirectoryReader
	method __init__
		variable source_path
		variable step
		variable start
		variable stop
		variable dimension
		variable image_paths
		variable source
		variable root
		variable files
		variable paths
class ArchiveReader
	method __init__
		variable source_path
		variable step
		variable start
		variable stop
		variable dimension
		variable extract_dir
	variable _archive_source
class PdfReader
	method __init__
		variable source_path
		variable step
		variable start
		variable stop
		variable dimension
		variable _basename
		variable _counter
		function _make_name
			variable page_num
		variable paths
	variable _pdf_source
	variable _tmp_dir
class ZipReader
	method __init__
		variable source_path
		variable step
		variable start
		variable stop
		variable dimension
		variable file_list
	method __del__
	method get_preview
		variable fp
		variable io_image
	method get_image_size
		variable i
		variable f
		variable properties
		variable img
	method get_image
		variable i
	method get_zip_filename
	method get_path
		variable i
	method reconcile
		variable source_files
		variable step
		variable start
		variable stop
		variable dimension
	method extract
	variable _zip_source
	variable extract_dir
class VideoReader
	method __init__
		variable source_path
		variable step
		variable start
		variable stop
		variable dimension
	method _has_frame
		variable i
	method _decode
		variable container
		variable frame_num
		variable packet
		variable image
		variable old_image
	method __iter__
		variable container
		variable source_video_stream
	method get_progress
		variable pos
		variable duration
	method _get_av_container
	method _get_duration
		variable container
		variable stream
		variable duration
		variable duration_str
		variable tb_denominator
		variable _hour
		variable _min
		variable _sec
		variable duration_sec
	method get_preview
		variable container
		variable stream
		variable preview
	method get_image_size
		variable i
		variable image
class FragmentMediaReader
	method __init__
		variable chunk_number
		variable chunk_size
		variable start
		variable stop
		variable step
	method frame_range
	method _get_frame_range
		variable frame_range
		variable idx
	variable _start
	variable _stop
	variable _step
	variable _chunk_number
	variable _chunk_size
	variable _start_chunk_frame_number
	variable _end_chunk_frame_number
	variable _frame_range
class ImageDatasetManifestReader
	method __init__
		variable manifest_path
		variable kwargs
	method __iter__
		variable idx
	variable _manifest
class VideoDatasetManifestReader
	method __init__
		variable manifest_path
		variable kwargs
	method _get_nearest_left_key_frame
		variable left_border
		variable delta
		variable step
		variable cur_position
		variable frame_number
		variable timestamp
	method __iter__
		variable start_decode_frame_number
		variable start_decode_timestamp
		variable container
		variable video_stream
		variable frame_number
		variable packet
		variable frame
	variable source_path
	variable _manifest
class IChunkWriter
	method __init__
		variable quality
		variable dimension
	method _compress_image
		variable image_path
		variable quality
		variable image
		variable im_data
		variable converted_image
		variable buf
		variable width
		variable height
	method save_as_chunk
		variable images
		variable chunk_path
	variable _image_quality
	variable _dimension
class ZipChunkWriter
	method save_as_chunk
		variable images
		variable chunk_path
		variable zip_chunk
		variable idx
		variable image
		variable path
		variable arcname
class ZipCompressedChunkWriter
	method save_as_chunk
		variable images
		variable chunk_path
		variable image_sizes
		variable zip_chunk
		variable idx
		variable image
		variable w
		variable h
		variable image_buf
		variable extension
		variable properties
		variable arcname
class Mpeg4ChunkWriter
	method __init__
		variable quality
		variable codec
	method _create_av_container
		variable path
		variable w
		variable h
		variable rate
		variable options
		variable f
		variable container
		variable video_stream
	method save_as_chunk
		variable images
		variable chunk_path
		variable input_w
		variable input_h
		variable output_container
		variable output_v_stream
	method _encode_images
		variable images
		variable container
		variable stream
		variable frame
		variable packet
	variable _output_fps
	variable _codec_name
	variable _codec_opts
class Mpeg4CompressedChunkWriter
	method __init__
		variable quality
	method save_as_chunk
		variable images
		variable chunk_path
		variable input_w
		variable input_h
		variable downscale_factor
		variable output_h
		variable output_w
		variable output_container
		variable output_v_stream
	variable _codec_opts
function _is_archive
	variable path
	variable mime
	variable mime_type
	variable encoding
	variable supportedArchives
function _is_video
	variable path
	variable mime
function _is_image
	variable path
	variable mime
function _is_dir
	variable path
function _is_pdf
	variable path
	variable mime
function _is_zip
	variable path
	variable mime
	variable mime_type
	variable encoding
	variable supportedArchives
constant MEDIA_TYPES
class ValidateDimension
	method __init__
		variable path
	method get_pcd_properties
		variable fp
		variable verify_version
		variable kv
		variable pcd_version
		variable line
		variable k
		variable v
	method convert_bin_to_pcd
		variable path
		variable delete_source
		variable list_pcd
		variable f
		variable size_float
		variable byte
		variable x
		variable y
		variable z
		variable np_pcd
		variable pcd
		variable pcd_filename
	method set_path
		variable path
	method bin_operation
		variable file_path
		variable actual_path
		variable pcd_path
	method pcd_operation
		variable file_path
		variable actual_path
		variable file
		variable is_pcd
	method process_files
		variable root
		variable actual_path
		variable files
		variable pcd_files
		variable file
		variable file_name
		variable file_extension
		variable file_path
		variable path
	method validate
		variable actual_path
		variable root
		variable files
	variable dimension
	variable path
	variable related_files
	variable image_files
	variable converted_files
