var added = false;
var id = '';
var data = '';
var div = document.getElementById('fistbump-post');

document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" />';

var init = function (id) {
    id = id.id
    added = true
    

    window.onload = function () {
        var firebaseConfig = {
            apiKey: "AIzaSyD0Iorrgyx7hpVuMLs1um3GcBJvsZJBdB8",
            authDomain: "fistbump-b9aaa.firebaseapp.com",
            databaseURL: "https://fistbump-b9aaa.firebaseio.com",
            projectId: "fistbump-b9aaa",
            storageBucket: "fistbump-b9aaa.appspot.com",
            messagingSenderId: "423661765169",
            appId: "1:423661765169:web:e8188e7300ba6a5ad20b10",
            measurementId: "G-3W732J6LHD"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        const db = firebase.firestore();
    var docRef = db.collection("Posts").doc(id);

docRef.get().then((doc) => {
    if (doc.exists) {
        data = doc.data()
        document.getElementById('fistbump-post').innerHTML = `                    <div class="lg:pl-64 pb-10 clearfix lg:pr-64">
    <div class="bg-white p-6 justify-fit-content rounded-lg shadow-lg" style="width: fit-content;">
        <div class="sm:flex sm:flex-shrink-0 justify-between">
            <div class="sm:flex sm:info lg:pl-3 sm:flex-shrink-0 ">
                <div>
                    <div class="w-10 h-10 bg-cover bg-center rounded-full mr-3 shadow-inner" style="background-image: url(${data.Creator_Pic});">
                    </div>
                </div>
                <div>
                    <p class="text-gray-600 font-medium" title=${data.Creator_Username}>${data.Creator_Username}</p>
                    <div class="flex items-center text-center text-xs text-gray-600">
                        <center>
                            <p class="max-w-10 sm:text-center"></p>
                        </center>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-4">
            
            <h1>${data.Post_Title}</h1>
            <p class="text-gray-600 text-sm">
                ${data.Post_Content}
            </p>
        </div>
    </div>
</div>
`
    } else {
        // doc.data() will be undefined in this case
        console.error("The post doesn't exsit")
    }
}).catch(function(error) {
    console.error(error);
});

    }
}

   window.onload = function () {
    
   }

