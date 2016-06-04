
var ii = 2345;

function test() 
{
    ii = 123;
    return ii;
    
}


test(); 

console.log(ii);

for(var i = 0; i < 6 ; i++)
{
    /*
    for(var i = 3; i <= 3; i++)
    {
       console.log("inner i", i); 
    }
    */
    console.log("i", i);
}

for (var i = 0; i < 10; i++ ) {
    (function(i) {
        setTimeout(function() {
            i = 100;
        }, 10);
        setTimeout(function() {console.log(i);}, 100 * i)
    })(i);
    
}

console.log("hello world")