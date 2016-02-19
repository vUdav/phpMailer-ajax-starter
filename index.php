<form action="javascript:void(0);" id="feedback" method="post" enctype="multipart/form-data">
	<input type="text" name="name" placeholder="Name" required="required">
	<input type="email" name="email" placeholder="E-Mail" required="required">
	<textarea name="text" placeholder="Text"></textarea>
	<input type="file" name="file">
	<input type="submit" value="Send">
	<!-- Some notifications block (ex. error or success) -->
	<div class="form-notif"></div>
</form>

<!-- Ajax mail -->
<script src="sendform.js"></script>