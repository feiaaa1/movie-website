;(window._iconfont_svg_string_4781923 =
  '<svg><symbol id="icon-home" viewBox="0 0 1024 1024"><path d="M960.128 514.666667 537.664 95.146667c-5.994667-5.952-14.421333-7.573333-22.08-5.568-7.658667-2.005333-16.085333-0.405333-22.08 5.568L71.04 514.666667c-8.981333 8.917333-8.981333 23.36 0 32.277333l10.837333 10.773333c8.981333 8.917333 23.530667 8.917333 32.490667 0l83.754667-83.178667 0 392.32c0 33.152 27.072 60.053333 60.458667 60.053333l514.005333 0c33.386667 0 60.458667-26.901333 60.458667-60.053333l0-392.32 83.754667 83.178667c8.981333 8.917333 23.530667 8.917333 32.490667 0l10.837333-10.773333C969.109333 538.026667 969.109333 523.584 960.128 514.666667zM515.584 581.610667c-50.090667 0-90.709333-40.341333-90.709333-90.069333 0-49.728 40.618667-90.069333 90.709333-90.069333s90.709333 40.341333 90.709333 90.069333C606.293333 541.290667 565.674667 581.610667 515.584 581.610667z" fill="#34CDDD" ></path></symbol></svg>'),
  ((n) => {
    var e = (t = (t = document.getElementsByTagName('script'))[t.length - 1]).getAttribute(
        'data-injectcss',
      ),
      t = t.getAttribute('data-disable-injectsvg')
    if (!t) {
      var o,
        i,
        c,
        d,
        s,
        l = function (e, t) {
          t.parentNode.insertBefore(e, t)
        }
      if (e && !n.__iconfont__svg__cssinject__) {
        n.__iconfont__svg__cssinject__ = !0
        try {
          document.write(
            '<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>',
          )
        } catch (e) {
          console && console.log(e)
        }
      }
      ;(o = function () {
        var e,
          t = document.createElement('div')
        ;(t.innerHTML = n._iconfont_svg_string_4781923),
          (t = t.getElementsByTagName('svg')[0]) &&
            (t.setAttribute('aria-hidden', 'true'),
            (t.style.position = 'absolute'),
            (t.style.width = 0),
            (t.style.height = 0),
            (t.style.overflow = 'hidden'),
            (t = t),
            (e = document.body).firstChild ? l(t, e.firstChild) : e.appendChild(t))
      }),
        document.addEventListener
          ? ~['complete', 'loaded', 'interactive'].indexOf(document.readyState)
            ? setTimeout(o, 0)
            : ((i = function () {
                document.removeEventListener('DOMContentLoaded', i, !1), o()
              }),
              document.addEventListener('DOMContentLoaded', i, !1))
          : document.attachEvent &&
            ((c = o),
            (d = n.document),
            (s = !1),
            r(),
            (d.onreadystatechange = function () {
              'complete' == d.readyState && ((d.onreadystatechange = null), a())
            }))
    }
    function a() {
      s || ((s = !0), c())
    }
    function r() {
      try {
        d.documentElement.doScroll('left')
      } catch (e) {
        return void setTimeout(r, 50)
      }
      a()
    }
  })(window)
