<div class="contact col-xs-12 col-md-12">
	<div class="content col-xs-12 col-md-8">
		<h1 class="wow fadeIn">Contact</h1>
		<h2 class="wow fadeIn">Contact me by filling in the contact form below. <!-- or send an e-mail to <span class="emailaddress">slawekpelka@outlook.com</span> --></h2>
		<form id="form" class="wow fadeIn" method="post" action="sendEmail.php">
			<div id="error"><span></span></div>
			<div id="success"><span></span></div>
			<div class="form-group col-xs-12 col-md-6">
				<input type="text" class="form-control" id="name" name="name" placeholder="Name*" required>
			</div>
			<div class="form-group col-xs-12 col-md-6">
				<input type="email" class="form-control" id="email" name="email" placeholder="E-mail*" required>
			</div>
			<div class="form-group col-xs-12 col-md-12">
				<textarea type="text" class="form-control" id="message" name="message" placeholder="Message*" required></textarea>
			</div>
				<input class="submit form-submit btn btn-default" type="submit" value="Send">
		</form>
	</div>
</div>