function SendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }


    if (document.getElementById("name").value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You should enter your name!',
        })


    }
    else if (document.getElementById("email").value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You should enter your email!',
        })
    }
    else if (document.getElementById("message").value == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You should enter your message!',
        })
    }
    else {

        emailjs.send("service_kt16uae", "template_8l15rba", params).then(
            function (res) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your message sent successfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
              
                document.getElementById("name").value = ""
                document.getElementById("email").value = ""
                document.getElementById("message").value = ""
                console.log(res.status)


            }
        )
    }


}





