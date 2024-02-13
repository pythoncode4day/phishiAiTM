(window.webpackJsonp = window.webpackJsonp || []).push([
	[20],
	{
		489: function (e, t, i) {
			var r = i(2), n = i(0), a = i(1), o = i(4);
			var c = window, d = n.PaginatedState, l = n.BindProvider;
			function s(e) {
				var t = this, i = e.serverData, r = e.idpRedirectUrl, n = e.idpRedirectPostParams, a = e.idpRedirectProvider, c = i.str, s = i.urlLinkedInFed, _ = i.urlGitHubFed, u = i.urlGoogleFed, R = i.urlFacebookFed, p = null;
				t.title = null, t.idpRedirectProvider = a, t.onSwitchView = o.create(), t.onRedirect = o.create(), t.saveSharedData = function () {
				}, t.getState = function () {
					return null;
				}, t.restoreState = function () {
				}, t.cancelRedirect_onClick = function () {
					clearTimeout(p), t.onSwitchView(d.Previous);
				}, function () {
					var e = r, i = n, o = c.CT_HRD_STR_Redirect_Title;
					switch (a) {
					case l.LinkedIn:
						e = e || s, i = null, o = c.CT_HRD_STR_Redirect_Title_LinkedIn;
						break;
					case l.GitHub:
						e = e || _, i = null, o = c.CT_HRD_STR_Redirect_Title_GitHub;
						break;
					case l.Google:
						e = e || u, i = null, o = c.CT_HRD_STR_Redirect_Title_Google;
						break;
					case l.Facebook:
						e = e || R, i = null, o = c.CT_HRD_STR_Redirect_Title_Facebook;
					}
					t.title = o, p = setTimeout(function () {
						t.onRedirect(e, i, !0, !0);
					}, 2000);
				}();
			}
			r.components.register('login-idp-redirect-view', {
				viewModel: s,
				template: i(645),
				synchronous: !c.ServerData.iMaxStackForKnockoutAsyncComponents || a.Helper.isStackSizeGreaterThan(c.ServerData.iMaxStackForKnockoutAsyncComponents),
				enableExtensions: !0
			}), e.exports = s;
		},
		645: function (e, t, i) {
			e.exports = '<!-- ' + (i(15), ' -->\n\n<div id="loginHeader" class="row" role="heading" aria-level="1" data-bind="text: title, externalCss: { \'title\': true }, attr: { \'data-test-redirect-provider-id\': idpRedirectProvider }"></div>\n\n<div class="row progress-container">\n    <div class="progress" role="progressbar" data-bind="component: \'marching-ants-control\', ariaLabel: str[\'WF_STR_ProgressText\']"></div>\n</div>\n\n<a id="aadRedirectCancel" href="#" data-bind="\n    text: str[\'CT_HRD_STR_Redirect_Cancel\'],\n    ariaDescribedBy: \'loginHeader\',\n    click: cancelRedirect_onClick,\n    hasFocus: true"></a>');
		}
	}
]), window.__convergedlogin_pidpredirect_ada19a19ad1f6b03f6a2 = !0;
