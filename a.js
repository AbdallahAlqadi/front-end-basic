
var trbody=document.getElementById('trbody')

var listitem=[{id:'123',name:"Ahmad",phone:'0799961707'},

    {id:'1',name:"Ahmad",phone:'0799961707'},
    {id:'2',name:"abdallah",phone:'07999'},
    {id:'3',name:"khaled",phone:'0799961707'},
    {id:'4',name:"esa",phone:'0799961707'}
]


for(i=0;i<listitem.length;i++){
    var row = document.createElement('td');
    row.innerHTML=listitem[i].id
    trbody.appendChild(row);
}