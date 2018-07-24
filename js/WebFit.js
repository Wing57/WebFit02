$(function () {
    var _Content = $(".Box");
    var _WindowWidth;
    var _WindowHeight;
    var _ContentWidth = 750;//根据设计稿修改尺寸
    var _Scale;
    $(window).resize(function () {
        _WindowWidth = $(window).width();
        _WindowHeight = $(window).height();
        _Scale = _WindowWidth / _ContentWidth;
        _Content.width(_WindowWidth / _Scale);
        _Content.height(_WindowHeight / _Scale);
        _Content.css({ "-webkit-transform": "scale(" + _Scale + ")", "transform": "scale(" + _Scale + ")" });
    });
    $(window).resize();
})