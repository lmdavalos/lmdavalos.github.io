// Created by iWeb 3.0.4 local-build-20190831

function createMediaStream_id1()
{return IWCreatePhotocast("https://lmdavalos.github.io/public/Site/TravelPages/Pages/Venezuela_files/rss.xml",false);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('https://lmdavalos.github.io/public/Site/TravelPages/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('https://lmdavalos.github.io/public/Site/TravelPages/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(3,new IWSize(174,174),new IWSize(174,54),new IWSize(208,243),27,27,0,new IWSize(22,23)),new IWPhotoFrame([IWCreateImage('Venezuela_files/techblack-frame_01.png'),IWCreateImage('Venezuela_files/techblack-frame_02.png'),IWCreateImage('Venezuela_files/techblack-frame_03.png'),IWCreateImage('Venezuela_files/techblack-frame_06.png'),IWCreateImage('Venezuela_files/techblack-frame_09.png'),IWCreateImage('Venezuela_files/techblack-frame_08.png'),IWCreateImage('Venezuela_files/techblack-frame_07.png'),IWCreateImage('Venezuela_files/techblack-frame_04.png')],null,2,0.666667,0.000000,0.000000,0.000000,0.000000,16.000000,16.000000,16.000000,18.000000,543.000000,380.000000,543.000000,380.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Venezuela_files/VenezuelaMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
