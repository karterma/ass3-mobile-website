
document.addEventListener('DOMContentLoaded', function () {
    //Store product information in the cache
    var goodsData = JSON.parse(localStorage.getItem('goods'));
    if (goodsData == undefined || goodsData == null) {
        var gData = [{ 'goodsname': 'Cyberpunk 2077', 'isShow': true, 'goodsid': 1, 'num': 1 }, { 'goodsname': 'The Last of US II', 'isShow': true, 'goodsid': 0, 'num': 1 }];
        localStorage.setItem('goods', JSON.stringify(gData));
        goodsData = JSON.parse(localStorage.getItem('goods'));
    }
});

function GotoDetail(value) {
    sessionStorage.setItem('goodsid', value);
    if (value == 0)
        window.location.href = 'GoodsDetail.html'
    else
        window.location.href = 'GoodsDetail2.html'
}