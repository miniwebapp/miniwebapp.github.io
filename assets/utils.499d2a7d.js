import{S as v,b as C,R as m}from"./index.9f0ba31e.js";import{_ as D,f as N}from"./Button.d6f501c7.js";var S={disabled:!1},x="unmounted",l="exited",p="entering",E="entered",T="exiting",o=function(f){D(u,f);function u(i,e){var t;t=f.call(this,i,e)||this;var n=e,a=n&&!n.isMounting?i.enter:i.appear,s;return t.appearStatus=null,i.in?a?(s=l,t.appearStatus=p):s=E:i.unmountOnExit||i.mountOnEnter?s=x:s=l,t.state={status:s},t.nextCallback=null,t}u.getDerivedStateFromProps=function(e,t){var n=e.in;return n&&t.status===x?{status:l}:null};var r=u.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==p&&n!==E&&(t=p):(n===p||n===E)&&(t=T)}this.updateStatus(!1,t)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e=this.props.timeout,t,n,a;return t=n=a=e,e!=null&&typeof e!="number"&&(t=e.exit,n=e.enter,a=e.appear!==void 0?e.appear:n),{exit:t,enter:n,appear:a}},r.updateStatus=function(e,t){e===void 0&&(e=!1),t!==null?(this.cancelNextCallback(),t===p?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&this.state.status===l&&this.setState({status:x})},r.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,s=this.props.nodeRef?[a]:[v.findDOMNode(this),a],d=s[0],h=s[1],b=this.getTimeouts(),g=a?b.appear:b.enter;if(!e&&!n||S.disabled){this.safeSetState({status:E},function(){t.props.onEntered(d)});return}this.props.onEnter(d,h),this.safeSetState({status:p},function(){t.props.onEntering(d,h),t.onTransitionEnd(g,function(){t.safeSetState({status:E},function(){t.props.onEntered(d,h)})})})},r.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:v.findDOMNode(this);if(!t||S.disabled){this.safeSetState({status:l},function(){e.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:T},function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,function(){e.safeSetState({status:l},function(){e.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},r.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},r.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:v.findDOMNode(this),a=e==null&&!this.props.addEndListener;if(!n||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var s=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],d=s[0],h=s[1];this.props.addEndListener(d,h)}e!=null&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===x)return null;var t=this.props,n=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var a=C(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return m.createElement(N.Provider,{value:null},typeof n=="function"?n(e,a):m.cloneElement(m.Children.only(n),a))},u}(m.Component);o.contextType=N;o.propTypes={};function c(){}o.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:c,onEntering:c,onEntered:c,onExit:c,onExiting:c,onExited:c};o.UNMOUNTED=x;o.EXITED=l;o.ENTERING=p;o.ENTERED=E;o.EXITING=T;var O=o;const R=f=>f.scrollTop;function M(f,u){var r,i;const{timeout:e,easing:t,style:n={}}=f;return{duration:(r=n.transitionDuration)!=null?r:typeof e=="number"?e:e[u.mode]||0,easing:(i=n.transitionTimingFunction)!=null?i:typeof t=="object"?t[u.mode]:t,delay:n.transitionDelay}}export{O as T,M as g,R as r};
