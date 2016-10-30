var main = function() {
    //varible layout for login and signup button on menu
    var loginMenu = '<a href="signup.html" class="item signin">'+
                        '<div class="ui primary button">Sign Up</div>' +
                    '</a>' +
                    '<div class="ui pointing dropdown link item" id="userImg">' +
                        '<div class="ui button">Login</div>' +
                        '<div class="menu">' +
                            '<div class="item">' +
                                '<form class="ui large form login" method="post">' +
                                    '<div class="field">' +
                                        '<h1 class="ui center aligned grid">Login</h1>' +
                                    '</div>'+
                                    '<div class="field">' +
                                        '<div class="ui left icon input">' +
                                            '<i class="user icon"></i>' +
                                            '<input type="text" name="username" id="username" placeholder="Username">'+
                                    '</div></div>' +
                                    '<div class="field">' +
                                        '<div class="ui left icon input">'+
                                            '<i class="lock icon"></i>'+
                                            '<input type="password" name="password" id="password" placeholder="Password">'+
                                    '</div></div>' +
                                    '<div class="ui fluid x-large teal sumbit button" id="loginButton">Login</div>' +

                                    '<!-- Error message-->' +
                                    '<div class="ui error message"></div>'
                                '</form>'+
                            '</div>' +
                        '</div>' +
                    '</div>';

    //varible to display user icon and name after user have loged in
    var userMenu = '<div class="item username">'+
                        '<img class="ui circular image" src="images/icon-user.png">'+
                        'Username' +
                    '</div>'+
                    '<a href="#" class="item user">' +
                        '<div class="ui button logout">Logout</div>' +
                    '</a>';

    var userLogin = false;
    //generate login and signup button or user icon after logined in
    if (userLogin) {
        $('.right.menu').append(userMenu);
        //add user account button
        $('.ui.menu .container a.home').after('<a href="user.html" class="item userAccount">User Account</a>')
    } else {
        $('.right.menu').append(loginMenu);
    }

    //logout button clicked
    $('.ui.button.logout').on('click', function () {
        userLogin = false;
        console.log("logout button pressed");
        location.reload();

    });

    //login form validation
    $('.ui.form.login').form({
        fields: {
            username: {
                identifier  : 'username',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your username'
                    }
                ]
            },
            password: {
                identifier  : 'password',
                rules: [
                    {
                        type   : 'empty',
                        prompt : 'Please enter your password'
                    }
                ]
            }
        },
        onSuccess: function(event){
            var username = $('#username').val(),
                password = $('#password').val(),
                $list = $("<ul>").addClass("list");

                // post data to app, handle response.

                /*
            $.ajax({
                url:'',
                method:'POST',
                data:{username:username, password:password},
                cache: false,
                success:function(data) {
                    //sucess - get data from server
                    if(data) {

                    }
                    //fail - don't recieve data from server
                    //display login fail message
                    else {
                        $('.ui.form').toggleClass("success error");
                        $('.error .list').remove();
                        $list.append($("<li>").text("Wrong username or password"));
                        $list.hide();
                        $('.ui.error.message').append($list);
                        $list.fadeIn();
                    }
                }
            });
            */
            return false;
        },
        onFailure: function() {
            console.log('failure');
            $('.error .list').hide().fadeIn();
            return false;
        }
    });

    //login button pressed
    $('#loginButton').on('click',function() {
        $('.ui.form.login').form('validate form');

        //reset to default
        $('#password').val('');
    });

    //enable login dropdown on click
    $('.ui.pointing.dropdown').dropdown({
        on: 'click',
        transition: 'fade down',
        action: 'nothing'
    });
};

$(document).ready(main);
