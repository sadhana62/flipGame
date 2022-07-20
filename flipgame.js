var score=0;
        var b1 = document.getElementById("1");
        var b2 = document.getElementById("2");
        var b3 = document.getElementById("3");
        var b4 = document.getElementById("4");
        var b5 = document.getElementById("5");
        var b6 = document.getElementById("6");
        var b7 = document.getElementById("7");
        var b8 = document.getElementById("8");
        var b9 = document.getElementById("9");
        var b10 = document.getElementById("10");
        var b11 = document.getElementById("11");
        var b12 = document.getElementById("12");
        var b13 = document.getElementById("13");
        var b14 = document.getElementById("14");
        var b15 = document.getElementById("15");
        var b16 = document.getElementById("16");
        var ch = [];
        const pr = [];
        function Game() {

            var boxes = document.querySelectorAll('.box');
            boxes.forEach(element => {
                element.style.backgroundColor = 'transparent';
            });
            function remove() {
                var i=pr.length-1;
                var y=0;
                while(y!=2)
                {
                    i=i-y;
                    document.getElementById(pr[i]).style.backgroundColor='transparent';
                    y=y+1;
                }
            }
            boxes.forEach(element => {
                element.addEventListener('click', function (e) {
                    var c1 = e.target.className;
                    var pre = e.target.id;
                    pr.push(pre);
                    ch.push(c1.split(" ")[0]);
                    // console.log(ch);
                    e.target.style.backgroundColor = c1.split(" ")[0];
                    if (ch.length == 2) {
                        if (ch[0] == ch[1]) {
                            console.log("matched");
                            console.log(ch);
                             ch=ch.splice();
                             console.log(ch);
                             score=score+10;
                             document.getElementById("Result").innerHTML=score;
                            

                        }
                        else {
                             setTimeout(remove,1000);
                             console.log(ch);
                             ch=ch.splice();
                             console.log(ch);
                        }
                    }
                    
                })
            });

        }
        const color=['blue','orange','Pink','gray','black','green','cyan','magenta'];
        const p = [];
        for(var i=0;i<8;i++)
        {
            p.push(Math.floor(Math.random()*color.length));
            console.log(p);
        }
        console.log(color[p[0]]);

        function PlayGame() {
            setTimeout(Game, 2000);
            b1.style.backgroundColor = color[p[0]];
            b1.setAttribute("class", `${color[p[0]]} box`);
            b2.style.backgroundColor = color[p[1]];
            b2.setAttribute("class", `${color[p[1]]} box`);
            b3.style.backgroundColor = color[p[1]];
            b3.setAttribute("class", `${color[p[1]]} box`);
            b4.style.backgroundColor = color[p[2]];
            b4.setAttribute("class", `${color[p[2]]} box`);
            b5.style.backgroundColor = color[p[2]];
            b5.setAttribute("class", `${color[p[2]]} box`);
            b6.style.backgroundColor = color[p[3]];
            b6.setAttribute("class", `${color[p[3]]} box`);
            b7.style.backgroundColor = color[p[0]];
            b7.setAttribute("class", `${color[p[0]]} box`);
            b8.style.backgroundColor = color[p[3]];
            b8.setAttribute("class", `${color[p[3]]} box`);
            b9.style.backgroundColor = color[p[4]];
            b9.setAttribute("class", `${color[p[4]]} box`);
            b10.style.backgroundColor = color[p[4]];
            b10.setAttribute("class", `${color[p[4]]} box`);
            b11.style.backgroundColor = color[p[5]];
            b11.setAttribute("class", `${color[p[5]]} box`);
            b12.style.backgroundColor = color[p[6]];
            b12.setAttribute("class", `${color[p[6]]} box`);
            b13.style.backgroundColor = color[p[7]];
            b13.setAttribute("class", `${color[p[7]]} box`);
            b14.style.backgroundColor = color[p[5]];
            b14.setAttribute("class", `${color[p[5]]} box`);         
            b15.style.backgroundColor = color[p[7]];
            b15.setAttribute("class", `${color[p[7]]} box`);
            b16.style.backgroundColor = color[p[6]];
            b16.setAttribute("class", `${color[p[6]]} box`);

        }