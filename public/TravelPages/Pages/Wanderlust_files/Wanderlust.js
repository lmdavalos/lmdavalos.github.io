// Created by iWeb 3.0.4 local-build-20190831

function createMediaStream_id1()
{return IWCreatePhotocast("https://lmdavalos.github.io/public/Site/TravelPages/Pages/Wanderlust_files/rss.xml",false);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('https://lmdavalos.github.io/public/Site/TravelPages/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('https://lmdavalos.github.io/public/Site/TravelPages/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(174,174),new IWSize(174,72),new IWSize(208,261),27,27,0,new IWSize(4,5)),new IWPhotoFrame([IWCreateImage('Wanderlust_files/green_linen_ul.png'),IWCreateImage('Wanderlust_files/green_linen_top.png'),IWCreateImage('Wanderlust_files/green_linen_ur.png'),IWCreateImage('Wanderlust_files/green_linen_right.png'),IWCreateImage('Wanderlust_files/green_linen_lr.png'),IWCreateImage('Wanderlust_files/green_linen_bottom.png'),IWCreateImage('Wanderlust_files/green_linen_ll.png'),IWCreateImage('Wanderlust_files/green_linen_left.png')],null,0,1.000000,13.000000,12.000000,13.000000,13.000000,15.000000,15.000000,15.000000,15.000000,15.000000,15.000000,15.000000,15.000000,null,null,null,0.400000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('../../Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','../../Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','../../Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Wanderlust_files/WanderlustMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
