module( "Theme tests", {
	setup: function() {
		$.enhance._installWidget();
	}
} );

function testThemeChange( assert, selectmenu, button, initial, firstChange, secondChange ) {
	assert.hasClasses( button, "ui-button-" + initial, "The correct initial swatch is present" );

	selectmenu.selectmenu( "option", "theme", firstChange );
	assert.hasClasses( button, "ui-button-" + firstChange,
		"After changing theme to '" + firstChange + "', the correct swatch is present" );
	assert.lacksClasses( button, "ui-button-" + initial,
		"After changing theme to '" + firstChange + "', the initial swatch is absent" );

	selectmenu.selectmenu( "option", "theme", secondChange );
	assert.hasClasses( button, "ui-button-" + secondChange,
		"After changing the theme again to '" + secondChange +
			"', the correct swatch is present" );
	assert.lacksClasses( button,
		"ui-button-" + initial + " ui-button-" + firstChange,
		"After changing the theme again to '" + secondChange + "', " +
			"selectmenu lacks both the initial swatch and the swatch first applied" );
}

QUnit.test( "Theme change - initially unset", function( assert ) {
	var menu = $( "#test-theme" ).selectmenu();

	testThemeChange( assert, menu, $( "#test-theme-button" ), "inherit", "a", "b" );
} );

QUnit.test( "Theme change - initially set", function( assert ) {
	var menu = $( "#test-theme-initially-set" ).selectmenu();

	testThemeChange( assert, menu, $( "#test-theme-initially-set-button" ), "b", "a", "inherit" );
} );
