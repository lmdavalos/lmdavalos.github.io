// Created by iWeb 3.0.4 local-build-20160303

function createMediaStream_id1()
{return IWCreatePhotocast("http://www.lmdavalos.net/Site/Site/TravelPages/Pages/Mexico_files/rss.xml",false);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('http://www.lmdavalos.net/Site/Site/TravelPages/Pages',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('http://www.lmdavalos.net/Site/Site/TravelPages/Pages',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(260,260),new IWSize(260,54),new IWSize(312,329),27,27,0,new IWSize(32,34)),new IWPhotoFrame([IWCreateImage('Mexico_files/techblack-frame_01.png'),IWCreateImage('Mexico_files/techblack-frame_02.png'),IWCreateImage('Mexico_files/techblack-frame_03.png'),IWCreateImage('Mexico_files/techblack-frame_06.png'),IWCreateImage('Mexico_files/techblack-frame_09.png'),IWCreateImage('Mexico_files/techblack-frame_08.png'),IWCreateImage('Mexico_files/techblack-frame_07.png'),IWCreateImage('Mexico_files/techblack-frame_04.png')],null,2,1.000000,0.000000,0.000000,0.000000,0.000000,16.000000,16.000000,16.000000,18.000000,543.000000,380.000000,543.000000,380.000000,null,null,null,0.100000),imageStream,range,null,null,1.000000,{backgroundColor:'rgb(0, 0, 0)',reflectionHeight:100,reflectionOffset:2,captionHeight:100,fullScreen:0,transitionIndex:2},'../../Media/slideshow.html','widget1','widget2','widget3')});}
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
loadMozillaCSS('Mexico_files/MexicoMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
Widget.onload();fixAllIEPNGs('../../Media/transparent.gif');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}
