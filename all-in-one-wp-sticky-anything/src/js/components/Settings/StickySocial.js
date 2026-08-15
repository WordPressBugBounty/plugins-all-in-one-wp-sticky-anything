const { useContext } = wp.element;

const {
    Button,
    ButtonGroup,
    FormToggle,
    TextControl,
    SelectControl,
} = wp.components;

import { Tooltip } from "react-tooltip";
import SettingsContext from "../../Contexts/SettingsContext";
import ColorPickerWrapper from "./ColorPickerWrapper";
import { showProModal } from "../../includes/ProModal";
import ProIcon from "../../includes/ProIcon";

export default function StickySocial() {
    const { isPro, postTypes } = ai1wpsa;
    const { data, setData } = useContext(SettingsContext);

    const {
        stickySocialIcon = false,
        stickySocialIconType = 'dashicons',
        stickySocialIconPosition = 'left',
        stickySocialIconStyle = 'square',
        stickySocialIconDisplay = 'everywhere',
        stickySocialIconDevice = 'all',
        stickySocialIcons = [],
        stickySocialIconsMenuBgColor = '#004bcb',
        stickySocialIconsIconColor = '#fff',
        stickySocialIconsIconHoverColor = '',
        stickySocialIconsIconBgColor = '#000',
        stickySocialIconsIconHoverBgColor = '',
    } = data || {};

    const iconOptions = [
        { value: 'dashicons', label: wp.i18n.__('Dashicons', 'all-in-one-wp-sticky-anything'), pro: false },
        { value: 'fontawesome', label: wp.i18n.__('Fontawesome', 'all-in-one-wp-sticky-anything'), pro: true },
        { value: 'bootstrap', label: wp.i18n.__('Bootstrap', 'all-in-one-wp-sticky-anything'), pro: true },
        { value: 'remixicon', label: wp.i18n.__('RemixIcon', 'all-in-one-wp-sticky-anything'), pro: true },
        { value: 'lineicon', label: wp.i18n.__('Lineicons', 'all-in-one-wp-sticky-anything'), pro: true },
    ];

    const displayLocationOptions = [
        { value: 'everywhere', label: wp.i18n.__('Everywhere', 'all-in-one-wp-sticky-anything') },
        { value: 'home', label: wp.i18n.__('Homepage', 'all-in-one-wp-sticky-anything'), pro: true },
        { value: 'blog', label: wp.i18n.__('Posts Page', 'all-in-one-wp-sticky-anything'), pro: true },
        ...postTypes.map(postType => ({ ...postType, pro: true }))
    ];

    const positionOptions = [
        { value: 'left', label: wp.i18n.__('Left', 'all-in-one-wp-sticky-anything') },
        { value: 'right', label: wp.i18n.__('Right', 'all-in-one-wp-sticky-anything') },
        { value: 'bottom', label: wp.i18n.__('Bottom', 'all-in-one-wp-sticky-anything'), pro: true },
    ];

    const styleOptions = [
        { value: 'circle', label: wp.i18n.__('Circle', 'all-in-one-wp-sticky-anything') },
        { value: 'square', label: wp.i18n.__('Square', 'all-in-one-wp-sticky-anything') },
        { value: 'rounded', label: wp.i18n.__('Rounded', 'all-in-one-wp-sticky-anything') },
    ];

    const deviceOptions = [
        { value: 'all', label: wp.i18n.__('All', 'all-in-one-wp-sticky-anything') },
        { value: 'desktop', label: wp.i18n.__('Desktop', 'all-in-one-wp-sticky-anything'), pro: true },
        { value: 'mobile', label: wp.i18n.__('Mobile', 'all-in-one-wp-sticky-anything'), pro: true },
    ];

    const socialIconOptions = {
        dashicons: [
            { label: wp.i18n.__('Select Icon', 'all-in-one-wp-sticky-anything'), value: '' },
            { label: wp.i18n.__('Amazon', 'all-in-one-wp-sticky-anything'), value: 'dashicons-amazon' },
            { label: wp.i18n.__('bbPress', 'all-in-one-wp-sticky-anything'), value: 'dashicons-bbpress' },
            { label: wp.i18n.__('BuddyPress', 'all-in-one-wp-sticky-anything'), value: 'dashicons-buddypress' },
            { label: wp.i18n.__('Facebook', 'all-in-one-wp-sticky-anything'), value: 'dashicons-facebook' },
            { label: wp.i18n.__('Facebook (alt)', 'all-in-one-wp-sticky-anything'), value: 'dashicons-facebook-alt' },
            { label: wp.i18n.__('Google', 'all-in-one-wp-sticky-anything'), value: 'dashicons-google' },
            { label: wp.i18n.__('Twitter', 'all-in-one-wp-sticky-anything'), value: 'dashicons-twitter' },
            { label: wp.i18n.__('Twitter (alt)', 'all-in-one-wp-sticky-anything'), value: 'dashicons-twitter-alt' },
            { label: wp.i18n.__('Instagram', 'all-in-one-wp-sticky-anything'), value: 'dashicons-instagram' },
            { label: wp.i18n.__('LinkedIn', 'all-in-one-wp-sticky-anything'), value: 'dashicons-linkedin' },
            { label: wp.i18n.__('YouTube', 'all-in-one-wp-sticky-anything'), value: 'dashicons-youtube' },
            { label: wp.i18n.__('Pinterest', 'all-in-one-wp-sticky-anything'), value: 'dashicons-pinterest' },
            { label: wp.i18n.__('Podio', 'all-in-one-wp-sticky-anything'), value: 'dashicons-podio' },
            { label: wp.i18n.__('Reddit', 'all-in-one-wp-sticky-anything'), value: 'dashicons-reddit' },
            { label: wp.i18n.__('WhatsApp', 'all-in-one-wp-sticky-anything'), value: 'dashicons-whatsapp' },
            { label: wp.i18n.__('WordPress', 'all-in-one-wp-sticky-anything'), value: 'dashicons-wordpress' },
            { label: wp.i18n.__('WordPress (alt)', 'all-in-one-wp-sticky-anything'), value: 'dashicons-wordpress-alt' },
            { label: wp.i18n.__('Twitch', 'all-in-one-wp-sticky-anything'), value: 'dashicons-twitch' },
            { label: wp.i18n.__('Spotify', 'all-in-one-wp-sticky-anything'), value: 'dashicons-spotify' },
            { label: wp.i18n.__('RSS', 'all-in-one-wp-sticky-anything'), value: 'dashicons-rss' },
            { label: wp.i18n.__('Email', 'all-in-one-wp-sticky-anything'), value: 'dashicons-email' },
            { label: wp.i18n.__('Email (alt)', 'all-in-one-wp-sticky-anything'), value: 'dashicons-email-alt' },
            { label: wp.i18n.__('Email (alt2)', 'all-in-one-wp-sticky-anything'), value: 'dashicons-email-alt2' },
            { label: wp.i18n.__('Phone', 'all-in-one-wp-sticky-anything'), value: 'dashicons-phone' },
            { label: wp.i18n.__('Links', 'all-in-one-wp-sticky-anything'), value: 'dashicons-links' },
            { label: wp.i18n.__('Share', 'all-in-one-wp-sticky-anything'), value: 'dashicons-share' },
            { label: wp.i18n.__('Share (alt)', 'all-in-one-wp-sticky-anything'), value: 'dashicons-share-alt' },
            { label: wp.i18n.__('Share (alt2)', 'all-in-one-wp-sticky-anything'), value: 'dashicons-share-alt2' },
            { label: wp.i18n.__('Site', 'all-in-one-wp-sticky-anything'), value: 'dashicons-admin-site' },
            { label: wp.i18n.__('Site (alt)', 'all-in-one-wp-sticky-anything'), value: 'dashicons-admin-site-alt' },
            { label: wp.i18n.__('Site (alt2)', 'all-in-one-wp-sticky-anything'), value: 'dashicons-admin-site-alt2' },
            { label: wp.i18n.__('Site (alt3)', 'all-in-one-wp-sticky-anything'), value: 'dashicons-admin-site-alt3' },
            { label: wp.i18n.__('Xing', 'all-in-one-wp-sticky-anything'), value: 'dashicons-xing' },
        ],
        fontawesome: [
            { label: wp.i18n.__('42 Group', 'all-in-one-wp-sticky-anything'), value: 'fa-42-group' },
            { label: wp.i18n.__('500px', 'all-in-one-wp-sticky-anything'), value: 'fa-500px' },
            { label: wp.i18n.__('Accusoft', 'all-in-one-wp-sticky-anything'), value: 'fa-accusoft' },
            { label: wp.i18n.__('Accessible Icon', 'all-in-one-wp-sticky-anything'), value: 'fa-accessible-icon' },
            { label: wp.i18n.__('ADN', 'all-in-one-wp-sticky-anything'), value: 'fa-adn' },
            { label: wp.i18n.__('Affiliatetheme', 'all-in-one-wp-sticky-anything'), value: 'fa-affiliatetheme' },
            { label: wp.i18n.__('Airbnb', 'all-in-one-wp-sticky-anything'), value: 'fa-airbnb' },
            { label: wp.i18n.__('Algolia', 'all-in-one-wp-sticky-anything'), value: 'fa-algolia' },
            { label: wp.i18n.__('Alipay', 'all-in-one-wp-sticky-anything'), value: 'fa-alipay' },
            { label: wp.i18n.__('Amazon', 'all-in-one-wp-sticky-anything'), value: 'fa-amazon' },
            { label: wp.i18n.__('Amazon Pay', 'all-in-one-wp-sticky-anything'), value: 'fa-amazon-pay' },
            { label: wp.i18n.__('Amilia', 'all-in-one-wp-sticky-anything'), value: 'fa-amilia' },
            { label: wp.i18n.__('Android', 'all-in-one-wp-sticky-anything'), value: 'fa-android' },
            { label: wp.i18n.__('AngelList', 'all-in-one-wp-sticky-anything'), value: 'fa-angellist' },
            { label: wp.i18n.__('Angry Creative', 'all-in-one-wp-sticky-anything'), value: 'fa-angrycreative' },
            { label: wp.i18n.__('Angular', 'all-in-one-wp-sticky-anything'), value: 'fa-angular' },
            { label: wp.i18n.__('App Store', 'all-in-one-wp-sticky-anything'), value: 'fa-app-store' },
            { label: wp.i18n.__('App Store iOS', 'all-in-one-wp-sticky-anything'), value: 'fa-app-store-ios' },
            { label: wp.i18n.__('Apper', 'all-in-one-wp-sticky-anything'), value: 'fa-apper' },
            { label: wp.i18n.__('Apple', 'all-in-one-wp-sticky-anything'), value: 'fa-apple' },
            { label: wp.i18n.__('Apple Pay', 'all-in-one-wp-sticky-anything'), value: 'fa-apple-pay' },
            { label: wp.i18n.__('ArtStation', 'all-in-one-wp-sticky-anything'), value: 'fa-artstation' },
            { label: wp.i18n.__('Asymmetrik', 'all-in-one-wp-sticky-anything'), value: 'fa-asymmetrik' },
            { label: wp.i18n.__('Atlassian', 'all-in-one-wp-sticky-anything'), value: 'fa-atlassian' },
            { label: wp.i18n.__('Audible', 'all-in-one-wp-sticky-anything'), value: 'fa-audible' },
            { label: wp.i18n.__('Autoprefixer', 'all-in-one-wp-sticky-anything'), value: 'fa-autoprefixer' },
            { label: wp.i18n.__('Avianex', 'all-in-one-wp-sticky-anything'), value: 'fa-avianex' },
            { label: wp.i18n.__('Aviato', 'all-in-one-wp-sticky-anything'), value: 'fa-aviato' },
            { label: wp.i18n.__('AWS', 'all-in-one-wp-sticky-anything'), value: 'fa-aws' },
            { label: wp.i18n.__('Bandcamp', 'all-in-one-wp-sticky-anything'), value: 'fa-bandcamp' },
            { label: wp.i18n.__('Battle.net', 'all-in-one-wp-sticky-anything'), value: 'fa-battle-net' },
            { label: wp.i18n.__('Behance', 'all-in-one-wp-sticky-anything'), value: 'fa-behance' },
            { label: wp.i18n.__('Bilibili', 'all-in-one-wp-sticky-anything'), value: 'fa-bilibili' },
            { label: wp.i18n.__('Bimobject', 'all-in-one-wp-sticky-anything'), value: 'fa-bimobject' },
            { label: wp.i18n.__('Bitcoin', 'all-in-one-wp-sticky-anything'), value: 'fa-bitcoin' },
            { label: wp.i18n.__('Bitbucket', 'all-in-one-wp-sticky-anything'), value: 'fa-bitbucket' },
            { label: wp.i18n.__('Bity', 'all-in-one-wp-sticky-anything'), value: 'fa-bity' },
            { label: wp.i18n.__('Black Tie', 'all-in-one-wp-sticky-anything'), value: 'fa-black-tie' },
            { label: wp.i18n.__('BlackBerry', 'all-in-one-wp-sticky-anything'), value: 'fa-blackberry' },
            { label: wp.i18n.__('Blogger', 'all-in-one-wp-sticky-anything'), value: 'fa-blogger' },
            { label: wp.i18n.__('Blogger B', 'all-in-one-wp-sticky-anything'), value: 'fa-blogger-b' },
            { label: wp.i18n.__('Bluetooth', 'all-in-one-wp-sticky-anything'), value: 'fa-bluetooth' },
            { label: wp.i18n.__('Bluetooth B', 'all-in-one-wp-sticky-anything'), value: 'fa-bluetooth-b' },
            { label: wp.i18n.__('Bootstrap', 'all-in-one-wp-sticky-anything'), value: 'fa-bootstrap' },
            { label: wp.i18n.__('Bots', 'all-in-one-wp-sticky-anything'), value: 'fa-bots' },
            { label: wp.i18n.__('Brave', 'all-in-one-wp-sticky-anything'), value: 'fa-brave' },
            { label: wp.i18n.__('Brave Reverse', 'all-in-one-wp-sticky-anything'), value: 'fa-brave-reverse' },
            { label: wp.i18n.__('BTC', 'all-in-one-wp-sticky-anything'), value: 'fa-btc' },
            { label: wp.i18n.__('Buffer', 'all-in-one-wp-sticky-anything'), value: 'fa-buffer' },
            { label: wp.i18n.__('Buy n Large', 'all-in-one-wp-sticky-anything'), value: 'fa-buy-n-large' },
            { label: wp.i18n.__('BuySellAds', 'all-in-one-wp-sticky-anything'), value: 'fa-buysellads' },
            { label: wp.i18n.__('Buromobelexperte', 'all-in-one-wp-sticky-anything'), value: 'fa-buromobelexperte' },
            { label: wp.i18n.__('CC Amazon Pay', 'all-in-one-wp-sticky-anything'), value: 'fa-cc-amazon-pay' },
            { label: wp.i18n.__('CC Amex', 'all-in-one-wp-sticky-anything'), value: 'fa-cc-amex' },
            { label: wp.i18n.__('CC Apple Pay', 'all-in-one-wp-sticky-anything'), value: 'fa-cc-apple-pay' },
            { label: wp.i18n.__('CC Diners Club', 'all-in-one-wp-sticky-anything'), value: 'fa-cc-diners-club' },
            { label: wp.i18n.__('CC Discover', 'all-in-one-wp-sticky-anything'), value: 'fa-cc-discover' },
            { label: wp.i18n.__('CC JCB', 'all-in-one-wp-sticky-anything'), value: 'fa-cc-jcb' },
            { label: wp.i18n.__('CC Mastercard', 'all-in-one-wp-sticky-anything'), value: 'fa-cc-mastercard' },
            { label: wp.i18n.__('CC PayPal', 'all-in-one-wp-sticky-anything'), value: 'fa-cc-paypal' },
            { label: wp.i18n.__('CC Stripe', 'all-in-one-wp-sticky-anything'), value: 'fa-cc-stripe' },
            { label: wp.i18n.__('CC Visa', 'all-in-one-wp-sticky-anything'), value: 'fa-cc-visa' },
            { label: wp.i18n.__('Canadian Maple Leaf', 'all-in-one-wp-sticky-anything'), value: 'fa-canadian-maple-leaf' },
            { label: wp.i18n.__('Cash App', 'all-in-one-wp-sticky-anything'), value: 'fa-cash-app' },
            { label: wp.i18n.__('Centercode', 'all-in-one-wp-sticky-anything'), value: 'fa-centercode' },
            { label: wp.i18n.__('CentOS', 'all-in-one-wp-sticky-anything'), value: 'fa-centos' },
            { label: wp.i18n.__('Chrome', 'all-in-one-wp-sticky-anything'), value: 'fa-chrome' },
            { label: wp.i18n.__('Chromecast', 'all-in-one-wp-sticky-anything'), value: 'fa-chromecast' },
            { label: wp.i18n.__('Cloudflare', 'all-in-one-wp-sticky-anything'), value: 'fa-cloudflare' },
            { label: wp.i18n.__('Cloudscale', 'all-in-one-wp-sticky-anything'), value: 'fa-cloudscale' },
            { label: wp.i18n.__('Cloudsmith', 'all-in-one-wp-sticky-anything'), value: 'fa-cloudsmith' },
            { label: wp.i18n.__('Cloudversify', 'all-in-one-wp-sticky-anything'), value: 'fa-cloudversify' },
            { label: wp.i18n.__('Cmplid', 'all-in-one-wp-sticky-anything'), value: 'fa-cmplid' },
            { label: wp.i18n.__('Codie Pie', 'all-in-one-wp-sticky-anything'), value: 'fa-codiepie' },
            { label: wp.i18n.__('CodePen', 'all-in-one-wp-sticky-anything'), value: 'fa-codepen' },
            { label: wp.i18n.__('Confluence', 'all-in-one-wp-sticky-anything'), value: 'fa-confluence' },
            { label: wp.i18n.__('Connect Develop', 'all-in-one-wp-sticky-anything'), value: 'fa-connectdevelop' },
            { label: wp.i18n.__('Contao', 'all-in-one-wp-sticky-anything'), value: 'fa-contao' },
            { label: wp.i18n.__('Cotton Bureau', 'all-in-one-wp-sticky-anything'), value: 'fa-cotton-bureau' },
            { label: wp.i18n.__('cPanel', 'all-in-one-wp-sticky-anything'), value: 'fa-cpanel' },
            { label: wp.i18n.__('Creative Commons', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons' },
            { label: wp.i18n.__('Creative Commons BY', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-by' },
            { label: wp.i18n.__('Creative Commons NC', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-nc' },
            { label: wp.i18n.__('Creative Commons NC EU', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-nc-eu' },
            { label: wp.i18n.__('Creative Commons NC JP', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-nc-jp' },
            { label: wp.i18n.__('Creative Commons ND', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-nd' },
            { label: wp.i18n.__('Creative Commons PD', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-pd' },
            { label: wp.i18n.__('Creative Commons PD Alt', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-pd-alt' },
            { label: wp.i18n.__('Creative Commons Remix', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-remix' },
            { label: wp.i18n.__('Creative Commons SA', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-sa' },
            { label: wp.i18n.__('Creative Commons Sampling', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-sampling' },
            { label: wp.i18n.__('Creative Commons Sampling Plus', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-sampling-plus' },
            { label: wp.i18n.__('Creative Commons Share', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-share' },
            { label: wp.i18n.__('Creative Commons Zero', 'all-in-one-wp-sticky-anything'), value: 'fa-creative-commons-zero' },
            { label: wp.i18n.__('Critical Role', 'all-in-one-wp-sticky-anything'), value: 'fa-critical-role' },
            { label: wp.i18n.__('CSS', 'all-in-one-wp-sticky-anything'), value: 'fa-css' },
            { label: wp.i18n.__('CSS3', 'all-in-one-wp-sticky-anything'), value: 'fa-css3' },
            { label: wp.i18n.__('CSS3 Alt', 'all-in-one-wp-sticky-anything'), value: 'fa-css3-alt' },
            { label: wp.i18n.__('Cuttlefish', 'all-in-one-wp-sticky-anything'), value: 'fa-cuttlefish' },
            { label: wp.i18n.__('D and D', 'all-in-one-wp-sticky-anything'), value: 'fa-d-and-d' },
            { label: wp.i18n.__('D and D Beyond', 'all-in-one-wp-sticky-anything'), value: 'fa-d-and-d-beyond' },
            { label: wp.i18n.__('Dailymotion', 'all-in-one-wp-sticky-anything'), value: 'fa-dailymotion' },
            { label: wp.i18n.__('Dart Lang', 'all-in-one-wp-sticky-anything'), value: 'fa-dart-lang' },
            { label: wp.i18n.__('Dashcube', 'all-in-one-wp-sticky-anything'), value: 'fa-dashcube' },
            { label: wp.i18n.__('Deezer', 'all-in-one-wp-sticky-anything'), value: 'fa-deezer' },
            { label: wp.i18n.__('Debian', 'all-in-one-wp-sticky-anything'), value: 'fa-debian' },
            { label: wp.i18n.__('Delicious', 'all-in-one-wp-sticky-anything'), value: 'fa-delicious' },
            { label: wp.i18n.__('Deploydog', 'all-in-one-wp-sticky-anything'), value: 'fa-deploydog' },
            { label: wp.i18n.__('Deskpro', 'all-in-one-wp-sticky-anything'), value: 'fa-deskpro' },
            { label: wp.i18n.__('Dev', 'all-in-one-wp-sticky-anything'), value: 'fa-dev' },
            { label: wp.i18n.__('DeviantArt', 'all-in-one-wp-sticky-anything'), value: 'fa-deviantart' },
            { label: wp.i18n.__('DHL', 'all-in-one-wp-sticky-anything'), value: 'fa-dhl' },
            { label: wp.i18n.__('Diaspora', 'all-in-one-wp-sticky-anything'), value: 'fa-diaspora' },
            { label: wp.i18n.__('Digg', 'all-in-one-wp-sticky-anything'), value: 'fa-digg' },
            { label: wp.i18n.__('Digital Ocean', 'all-in-one-wp-sticky-anything'), value: 'fa-digital-ocean' },
            { label: wp.i18n.__('Discord', 'all-in-one-wp-sticky-anything'), value: 'fa-discord' },
            { label: wp.i18n.__('Discourse', 'all-in-one-wp-sticky-anything'), value: 'fa-discourse' },
            { label: wp.i18n.__('Disqus', 'all-in-one-wp-sticky-anything'), value: 'fa-disqus' },
            { label: wp.i18n.__('DocHub', 'all-in-one-wp-sticky-anything'), value: 'fa-dochub' },
            { label: wp.i18n.__('Docker', 'all-in-one-wp-sticky-anything'), value: 'fa-docker' },
            { label: wp.i18n.__('Draft2digital', 'all-in-one-wp-sticky-anything'), value: 'fa-draft2digital' },
            { label: wp.i18n.__('Dribbble', 'all-in-one-wp-sticky-anything'), value: 'fa-dribbble' },
            { label: wp.i18n.__('Dropbox', 'all-in-one-wp-sticky-anything'), value: 'fa-dropbox' },
            { label: wp.i18n.__('Drupal', 'all-in-one-wp-sticky-anything'), value: 'fa-drupal' },
            { label: wp.i18n.__('Duolingo', 'all-in-one-wp-sticky-anything'), value: 'fa-duolingo' },
            { label: wp.i18n.__('Dyalog', 'all-in-one-wp-sticky-anything'), value: 'fa-dyalog' },
            { label: wp.i18n.__('Earlybirds', 'all-in-one-wp-sticky-anything'), value: 'fa-earlybirds' },
            { label: wp.i18n.__('eBay', 'all-in-one-wp-sticky-anything'), value: 'fa-ebay' },
            { label: wp.i18n.__('Edge', 'all-in-one-wp-sticky-anything'), value: 'fa-edge' },
            { label: wp.i18n.__('Edge Legacy', 'all-in-one-wp-sticky-anything'), value: 'fa-edge-legacy' },
            { label: wp.i18n.__('Elementor', 'all-in-one-wp-sticky-anything'), value: 'fa-elementor' },
            { label: wp.i18n.__('Eleventy', 'all-in-one-wp-sticky-anything'), value: 'fa-eleventy' },
            { label: wp.i18n.__('Ello', 'all-in-one-wp-sticky-anything'), value: 'fa-ello' },
            { label: wp.i18n.__('Ember', 'all-in-one-wp-sticky-anything'), value: 'fa-ember' },
            { label: wp.i18n.__('Empire', 'all-in-one-wp-sticky-anything'), value: 'fa-empire' },
            { label: wp.i18n.__('Envira', 'all-in-one-wp-sticky-anything'), value: 'fa-envira' },
            { label: wp.i18n.__('Erlang', 'all-in-one-wp-sticky-anything'), value: 'fa-erlang' },
            { label: wp.i18n.__('Ethereum', 'all-in-one-wp-sticky-anything'), value: 'fa-ethereum' },
            { label: wp.i18n.__('Etsy', 'all-in-one-wp-sticky-anything'), value: 'fa-etsy' },
            { label: wp.i18n.__('Evernote', 'all-in-one-wp-sticky-anything'), value: 'fa-evernote' },
            { label: wp.i18n.__('ExpeditedSSL', 'all-in-one-wp-sticky-anything'), value: 'fa-expeditedssl' },
            { label: wp.i18n.__('Fantasy Flight Games', 'all-in-one-wp-sticky-anything'), value: 'fa-fantasy-flight-games' },
            { label: wp.i18n.__('Facebook', 'all-in-one-wp-sticky-anything'), value: 'fa-facebook' },
            { label: wp.i18n.__('Facebook F', 'all-in-one-wp-sticky-anything'), value: 'fa-facebook-f' },
            { label: wp.i18n.__('Facebook Messenger', 'all-in-one-wp-sticky-anything'), value: 'fa-facebook-messenger' },
            { label: wp.i18n.__('FedEx', 'all-in-one-wp-sticky-anything'), value: 'fa-fedex' },
            { label: wp.i18n.__('Fedora', 'all-in-one-wp-sticky-anything'), value: 'fa-fedora' },
            { label: wp.i18n.__('Figma', 'all-in-one-wp-sticky-anything'), value: 'fa-figma' },
            { label: wp.i18n.__('Files Pinwheel', 'all-in-one-wp-sticky-anything'), value: 'fa-files-pinwheel' },
            { label: wp.i18n.__('Firefox', 'all-in-one-wp-sticky-anything'), value: 'fa-firefox' },
            { label: wp.i18n.__('Firefox Browser', 'all-in-one-wp-sticky-anything'), value: 'fa-firefox-browser' },
            { label: wp.i18n.__('First Order', 'all-in-one-wp-sticky-anything'), value: 'fa-first-order' },
            { label: wp.i18n.__('First Order Alt', 'all-in-one-wp-sticky-anything'), value: 'fa-first-order-alt' },
            { label: wp.i18n.__('Firstdraft', 'all-in-one-wp-sticky-anything'), value: 'fa-firstdraft' },
            { label: wp.i18n.__('Flickr', 'all-in-one-wp-sticky-anything'), value: 'fa-flickr' },
            { label: wp.i18n.__('Flipboard', 'all-in-one-wp-sticky-anything'), value: 'fa-flipboard' },
            { label: wp.i18n.__('Flutter', 'all-in-one-wp-sticky-anything'), value: 'fa-flutter' },
            { label: wp.i18n.__('Fly', 'all-in-one-wp-sticky-anything'), value: 'fa-fly' },
            { label: wp.i18n.__('Font Awesome', 'all-in-one-wp-sticky-anything'), value: 'fa-font-awesome' },
            { label: wp.i18n.__('Fonticons', 'all-in-one-wp-sticky-anything'), value: 'fa-fonticons' },
            { label: wp.i18n.__('Fonticons Fi', 'all-in-one-wp-sticky-anything'), value: 'fa-fonticons-fi' },
            { label: wp.i18n.__('Fort Awesome', 'all-in-one-wp-sticky-anything'), value: 'fa-fort-awesome' },
            { label: wp.i18n.__('Fort Awesome Alt', 'all-in-one-wp-sticky-anything'), value: 'fa-fort-awesome-alt' },
            { label: wp.i18n.__('Forumbee', 'all-in-one-wp-sticky-anything'), value: 'fa-forumbee' },
            { label: wp.i18n.__('Foursquare', 'all-in-one-wp-sticky-anything'), value: 'fa-foursquare' },
            { label: wp.i18n.__('Free Code Camp', 'all-in-one-wp-sticky-anything'), value: 'fa-free-code-camp' },
            { label: wp.i18n.__('FreeBSD', 'all-in-one-wp-sticky-anything'), value: 'fa-freebsd' },
            { label: wp.i18n.__('Fulcrum', 'all-in-one-wp-sticky-anything'), value: 'fa-fulcrum' },
            { label: wp.i18n.__('Galactic Republic', 'all-in-one-wp-sticky-anything'), value: 'fa-galactic-republic' },
            { label: wp.i18n.__('Galactic Senate', 'all-in-one-wp-sticky-anything'), value: 'fa-galactic-senate' },
            { label: wp.i18n.__('Get Pocket', 'all-in-one-wp-sticky-anything'), value: 'fa-get-pocket' },
            { label: wp.i18n.__('GG', 'all-in-one-wp-sticky-anything'), value: 'fa-gg' },
            { label: wp.i18n.__('GG Circle', 'all-in-one-wp-sticky-anything'), value: 'fa-gg-circle' },
            { label: wp.i18n.__('Git', 'all-in-one-wp-sticky-anything'), value: 'fa-git' },
            { label: wp.i18n.__('Git Alt', 'all-in-one-wp-sticky-anything'), value: 'fa-git-alt' },
            { label: wp.i18n.__('GitHub', 'all-in-one-wp-sticky-anything'), value: 'fa-github' },
            { label: wp.i18n.__('GitHub Alt', 'all-in-one-wp-sticky-anything'), value: 'fa-github-alt' },
            { label: wp.i18n.__('GitKraken', 'all-in-one-wp-sticky-anything'), value: 'fa-gitkraken' },
            { label: wp.i18n.__('GitLab', 'all-in-one-wp-sticky-anything'), value: 'fa-gitlab' },
            { label: wp.i18n.__('Gitter', 'all-in-one-wp-sticky-anything'), value: 'fa-gitter' },
            { label: wp.i18n.__('Glide', 'all-in-one-wp-sticky-anything'), value: 'fa-glide' },
            { label: wp.i18n.__('Glide G', 'all-in-one-wp-sticky-anything'), value: 'fa-glide-g' },
            { label: wp.i18n.__('Gofore', 'all-in-one-wp-sticky-anything'), value: 'fa-gofore' },
            { label: wp.i18n.__('Golang', 'all-in-one-wp-sticky-anything'), value: 'fa-golang' },
            { label: wp.i18n.__('Goodreads', 'all-in-one-wp-sticky-anything'), value: 'fa-goodreads' },
            { label: wp.i18n.__('Goodreads G', 'all-in-one-wp-sticky-anything'), value: 'fa-goodreads-g' },
            { label: wp.i18n.__('Google', 'all-in-one-wp-sticky-anything'), value: 'fa-google' },
            { label: wp.i18n.__('Google Drive', 'all-in-one-wp-sticky-anything'), value: 'fa-google-drive' },
            { label: wp.i18n.__('Google Pay', 'all-in-one-wp-sticky-anything'), value: 'fa-google-pay' },
            { label: wp.i18n.__('Google Play', 'all-in-one-wp-sticky-anything'), value: 'fa-google-play' },
            { label: wp.i18n.__('Google Plus', 'all-in-one-wp-sticky-anything'), value: 'fa-google-plus' },
            { label: wp.i18n.__('Google Plus G', 'all-in-one-wp-sticky-anything'), value: 'fa-google-plus-g' },
            { label: wp.i18n.__('Google Scholar', 'all-in-one-wp-sticky-anything'), value: 'fa-google-scholar' },
            { label: wp.i18n.__('Google Wallet', 'all-in-one-wp-sticky-anything'), value: 'fa-google-wallet' },
            { label: wp.i18n.__('Gratipay', 'all-in-one-wp-sticky-anything'), value: 'fa-gratipay' },
            { label: wp.i18n.__('Grav', 'all-in-one-wp-sticky-anything'), value: 'fa-grav' },
            { label: wp.i18n.__('Gripfire', 'all-in-one-wp-sticky-anything'), value: 'fa-gripfire' },
            { label: wp.i18n.__('Grunt', 'all-in-one-wp-sticky-anything'), value: 'fa-grunt' },
            { label: wp.i18n.__('Guilded', 'all-in-one-wp-sticky-anything'), value: 'fa-guilded' },
            { label: wp.i18n.__('Gulp', 'all-in-one-wp-sticky-anything'), value: 'fa-gulp' },
            { label: wp.i18n.__('Hacker News', 'all-in-one-wp-sticky-anything'), value: 'fa-hacker-news' },
            { label: wp.i18n.__('HackerRank', 'all-in-one-wp-sticky-anything'), value: 'fa-hackerrank' },
            { label: wp.i18n.__('Hashnode', 'all-in-one-wp-sticky-anything'), value: 'fa-hashnode' },
            { label: wp.i18n.__('Hire A Helper', 'all-in-one-wp-sticky-anything'), value: 'fa-hire-a-helper' },
            { label: wp.i18n.__('Hive', 'all-in-one-wp-sticky-anything'), value: 'fa-hive' },
            { label: wp.i18n.__('HIPS', 'all-in-one-wp-sticky-anything'), value: 'fa-hips' },
            { label: wp.i18n.__('Hooli', 'all-in-one-wp-sticky-anything'), value: 'fa-hooli' },
            { label: wp.i18n.__('Hornbill', 'all-in-one-wp-sticky-anything'), value: 'fa-hornbill' },
            { label: wp.i18n.__('Hotjar', 'all-in-one-wp-sticky-anything'), value: 'fa-hotjar' },
            { label: wp.i18n.__('Houzz', 'all-in-one-wp-sticky-anything'), value: 'fa-houzz' },
            { label: wp.i18n.__('HTML5', 'all-in-one-wp-sticky-anything'), value: 'fa-html5' },
            { label: wp.i18n.__('HubSpot', 'all-in-one-wp-sticky-anything'), value: 'fa-hubspot' },
            { label: wp.i18n.__('Ideal', 'all-in-one-wp-sticky-anything'), value: 'fa-ideal' },
            { label: wp.i18n.__('IMDB', 'all-in-one-wp-sticky-anything'), value: 'fa-imdb' },
            { label: wp.i18n.__('Instagram', 'all-in-one-wp-sticky-anything'), value: 'fa-instagram' },
            { label: wp.i18n.__('Instalod', 'all-in-one-wp-sticky-anything'), value: 'fa-instalod' },
            { label: wp.i18n.__('Intercom', 'all-in-one-wp-sticky-anything'), value: 'fa-intercom' },
            { label: wp.i18n.__('Internet Explorer', 'all-in-one-wp-sticky-anything'), value: 'fa-internet-explorer' },
            { label: wp.i18n.__('Invision', 'all-in-one-wp-sticky-anything'), value: 'fa-invision' },
            { label: wp.i18n.__('IOXHost', 'all-in-one-wp-sticky-anything'), value: 'fa-ioxhost' },
            { label: wp.i18n.__('Itch.io', 'all-in-one-wp-sticky-anything'), value: 'fa-itch-io' },
            { label: wp.i18n.__('iTunes', 'all-in-one-wp-sticky-anything'), value: 'fa-itunes' },
            { label: wp.i18n.__('iTunes Note', 'all-in-one-wp-sticky-anything'), value: 'fa-itunes-note' },
            { label: wp.i18n.__('Java', 'all-in-one-wp-sticky-anything'), value: 'fa-java' },
            { label: wp.i18n.__('Jedi Order', 'all-in-one-wp-sticky-anything'), value: 'fa-jedi-order' },
            { label: wp.i18n.__('Jenkins', 'all-in-one-wp-sticky-anything'), value: 'fa-jenkins' },
            { label: wp.i18n.__('Jira', 'all-in-one-wp-sticky-anything'), value: 'fa-jira' },
            { label: wp.i18n.__('Joomla', 'all-in-one-wp-sticky-anything'), value: 'fa-joomla' },
            { label: wp.i18n.__('Joget', 'all-in-one-wp-sticky-anything'), value: 'fa-joget' },
            { label: wp.i18n.__('JS', 'all-in-one-wp-sticky-anything'), value: 'fa-js' },
            { label: wp.i18n.__('JSFiddle', 'all-in-one-wp-sticky-anything'), value: 'fa-jsfiddle' },
            { label: wp.i18n.__('JXL', 'all-in-one-wp-sticky-anything'), value: 'fa-jxl' },
            { label: wp.i18n.__('Kaggle', 'all-in-one-wp-sticky-anything'), value: 'fa-kaggle' },
            { label: wp.i18n.__('Kakao Talk', 'all-in-one-wp-sticky-anything'), value: 'fa-kakao-talk' },
            { label: wp.i18n.__('Keybase', 'all-in-one-wp-sticky-anything'), value: 'fa-keybase' },
            { label: wp.i18n.__('KeyCDN', 'all-in-one-wp-sticky-anything'), value: 'fa-keycdn' },
            { label: wp.i18n.__('Kickstarter', 'all-in-one-wp-sticky-anything'), value: 'fa-kickstarter' },
            { label: wp.i18n.__('Kickstarter K', 'all-in-one-wp-sticky-anything'), value: 'fa-kickstarter-k' },
            { label: wp.i18n.__('Korvue', 'all-in-one-wp-sticky-anything'), value: 'fa-korvue' },
            { label: wp.i18n.__('Laravel', 'all-in-one-wp-sticky-anything'), value: 'fa-laravel' },
            { label: wp.i18n.__('Last.fm', 'all-in-one-wp-sticky-anything'), value: 'fa-lastfm' },
            { label: wp.i18n.__('Leanpub', 'all-in-one-wp-sticky-anything'), value: 'fa-leanpub' },
            { label: wp.i18n.__('Less', 'all-in-one-wp-sticky-anything'), value: 'fa-less' },
            { label: wp.i18n.__('Letterboxd', 'all-in-one-wp-sticky-anything'), value: 'fa-letterboxd' },
            { label: wp.i18n.__('Line', 'all-in-one-wp-sticky-anything'), value: 'fa-line' },
            { label: wp.i18n.__('LinkedIn', 'all-in-one-wp-sticky-anything'), value: 'fa-linkedin' },
            { label: wp.i18n.__('LinkedIn In', 'all-in-one-wp-sticky-anything'), value: 'fa-linkedin-in' },
            { label: wp.i18n.__('Linode', 'all-in-one-wp-sticky-anything'), value: 'fa-linode' },
            { label: wp.i18n.__('Linktree', 'all-in-one-wp-sticky-anything'), value: 'fa-linktree' },
            { label: wp.i18n.__('Linux', 'all-in-one-wp-sticky-anything'), value: 'fa-linux' },
            { label: wp.i18n.__('Lumon', 'all-in-one-wp-sticky-anything'), value: 'fa-lumon' },
            { label: wp.i18n.__('Lumon Drop', 'all-in-one-wp-sticky-anything'), value: 'fa-lumon-drop' },
            { label: wp.i18n.__('Lyft', 'all-in-one-wp-sticky-anything'), value: 'fa-lyft' },
            { label: wp.i18n.__('Magento', 'all-in-one-wp-sticky-anything'), value: 'fa-magento' },
            { label: wp.i18n.__('Mailchimp', 'all-in-one-wp-sticky-anything'), value: 'fa-mailchimp' },
            { label: wp.i18n.__('Mandalorian', 'all-in-one-wp-sticky-anything'), value: 'fa-mandalorian' },
            { label: wp.i18n.__('Markdown', 'all-in-one-wp-sticky-anything'), value: 'fa-markdown' },
            { label: wp.i18n.__('Mastodon', 'all-in-one-wp-sticky-anything'), value: 'fa-mastodon' },
            { label: wp.i18n.__('MaxCDN', 'all-in-one-wp-sticky-anything'), value: 'fa-maxcdn' },
            { label: wp.i18n.__('MDB', 'all-in-one-wp-sticky-anything'), value: 'fa-mdb' },
            { label: wp.i18n.__('Medapps', 'all-in-one-wp-sticky-anything'), value: 'fa-medapps' },
            { label: wp.i18n.__('MedRT', 'all-in-one-wp-sticky-anything'), value: 'fa-medrt' },
            { label: wp.i18n.__('Medium', 'all-in-one-wp-sticky-anything'), value: 'fa-medium' },
            { label: wp.i18n.__('Meetup', 'all-in-one-wp-sticky-anything'), value: 'fa-meetup' },
            { label: wp.i18n.__('Megaport', 'all-in-one-wp-sticky-anything'), value: 'fa-megaport' },
            { label: wp.i18n.__('Mendeley', 'all-in-one-wp-sticky-anything'), value: 'fa-mendeley' },
            { label: wp.i18n.__('Meta', 'all-in-one-wp-sticky-anything'), value: 'fa-meta' },
            { label: wp.i18n.__('Microsoft', 'all-in-one-wp-sticky-anything'), value: 'fa-microsoft' },
            { label: wp.i18n.__('Mintbit', 'all-in-one-wp-sticky-anything'), value: 'fa-mintbit' },
            { label: wp.i18n.__('Mix', 'all-in-one-wp-sticky-anything'), value: 'fa-mix' },
            { label: wp.i18n.__('Mixcloud', 'all-in-one-wp-sticky-anything'), value: 'fa-mixcloud' },
            { label: wp.i18n.__('Mixer', 'all-in-one-wp-sticky-anything'), value: 'fa-mixer' },
            { label: wp.i18n.__('Mizuni', 'all-in-one-wp-sticky-anything'), value: 'fa-mizuni' },
            { label: wp.i18n.__('MODX', 'all-in-one-wp-sticky-anything'), value: 'fa-modx' },
            { label: wp.i18n.__('Monero', 'all-in-one-wp-sticky-anything'), value: 'fa-monero' },
            { label: wp.i18n.__('Napster', 'all-in-one-wp-sticky-anything'), value: 'fa-napster' },
            { label: wp.i18n.__('Neos', 'all-in-one-wp-sticky-anything'), value: 'fa-neos' },
            { label: wp.i18n.__('NFC Directional', 'all-in-one-wp-sticky-anything'), value: 'fa-nfc-directional' },
            { label: wp.i18n.__('NFC Symbol', 'all-in-one-wp-sticky-anything'), value: 'fa-nfc-symbol' },
            { label: wp.i18n.__('Nimblr', 'all-in-one-wp-sticky-anything'), value: 'fa-nimblr' },
            { label: wp.i18n.__('Node', 'all-in-one-wp-sticky-anything'), value: 'fa-node' },
            { label: wp.i18n.__('Node JS', 'all-in-one-wp-sticky-anything'), value: 'fa-node-js' },
            { label: wp.i18n.__('Notion', 'all-in-one-wp-sticky-anything'), value: 'fa-notion' },
            { label: wp.i18n.__('NPM', 'all-in-one-wp-sticky-anything'), value: 'fa-npm' },
            { label: wp.i18n.__('NS8', 'all-in-one-wp-sticky-anything'), value: 'fa-ns8' },
            { label: wp.i18n.__('Nutritionix', 'all-in-one-wp-sticky-anything'), value: 'fa-nutritionix' },
            { label: wp.i18n.__('Octopus Deploy', 'all-in-one-wp-sticky-anything'), value: 'fa-octopus-deploy' },
            { label: wp.i18n.__('Odnoklassniki', 'all-in-one-wp-sticky-anything'), value: 'fa-odnoklassniki' },
            { label: wp.i18n.__('Odysee', 'all-in-one-wp-sticky-anything'), value: 'fa-odysee' },
            { label: wp.i18n.__('Old Republic', 'all-in-one-wp-sticky-anything'), value: 'fa-old-republic' },
            { label: wp.i18n.__('OpenAI', 'all-in-one-wp-sticky-anything'), value: 'fa-openai' },
            { label: wp.i18n.__('OpenCart', 'all-in-one-wp-sticky-anything'), value: 'fa-opencart' },
            { label: wp.i18n.__('OpenID', 'all-in-one-wp-sticky-anything'), value: 'fa-openid' },
            { label: wp.i18n.__('OpenSUSE', 'all-in-one-wp-sticky-anything'), value: 'fa-opensuse' },
            { label: wp.i18n.__('Opera', 'all-in-one-wp-sticky-anything'), value: 'fa-opera' },
            { label: wp.i18n.__('OptinMonster', 'all-in-one-wp-sticky-anything'), value: 'fa-optin-monster' },
            { label: wp.i18n.__('ORCID', 'all-in-one-wp-sticky-anything'), value: 'fa-orcid' },
            { label: wp.i18n.__('OSI', 'all-in-one-wp-sticky-anything'), value: 'fa-osi' },
            { label: wp.i18n.__('Padlet', 'all-in-one-wp-sticky-anything'), value: 'fa-padlet' },
            { label: wp.i18n.__('Page4', 'all-in-one-wp-sticky-anything'), value: 'fa-page4' },
            { label: wp.i18n.__('Pagelines', 'all-in-one-wp-sticky-anything'), value: 'fa-pagelines' },
            { label: wp.i18n.__('Palfed', 'all-in-one-wp-sticky-anything'), value: 'fa-palfed' },
            { label: wp.i18n.__('Pandora', 'all-in-one-wp-sticky-anything'), value: 'fa-pandora' },
            { label: wp.i18n.__('Patreon', 'all-in-one-wp-sticky-anything'), value: 'fa-patreon' },
            { label: wp.i18n.__('PayPal', 'all-in-one-wp-sticky-anything'), value: 'fa-paypal' },
            { label: wp.i18n.__('Perbyte', 'all-in-one-wp-sticky-anything'), value: 'fa-perbyte' },
            { label: wp.i18n.__('Periscope', 'all-in-one-wp-sticky-anything'), value: 'fa-periscope' },
            { label: wp.i18n.__('Phabricator', 'all-in-one-wp-sticky-anything'), value: 'fa-phabricator' },
            { label: wp.i18n.__('Phoenix Framework', 'all-in-one-wp-sticky-anything'), value: 'fa-phoenix-framework' },
            { label: wp.i18n.__('Phoenix Squadron', 'all-in-one-wp-sticky-anything'), value: 'fa-phoenix-squadron' },
            { label: wp.i18n.__('PHP', 'all-in-one-wp-sticky-anything'), value: 'fa-php' },
            { label: wp.i18n.__('Pied Piper', 'all-in-one-wp-sticky-anything'), value: 'fa-pied-piper' },
            { label: wp.i18n.__('Pied Piper Alt', 'all-in-one-wp-sticky-anything'), value: 'fa-pied-piper-alt' },
            { label: wp.i18n.__('Pied Piper Hat', 'all-in-one-wp-sticky-anything'), value: 'fa-pied-piper-hat' },
            { label: wp.i18n.__('Pied Piper PP', 'all-in-one-wp-sticky-anything'), value: 'fa-pied-piper-pp' },
            { label: wp.i18n.__('Pinterest', 'all-in-one-wp-sticky-anything'), value: 'fa-pinterest' },
            { label: wp.i18n.__('Pinterest P', 'all-in-one-wp-sticky-anything'), value: 'fa-pinterest-p' },
            { label: wp.i18n.__('Pix', 'all-in-one-wp-sticky-anything'), value: 'fa-pix' },
            { label: wp.i18n.__('PixelFed', 'all-in-one-wp-sticky-anything'), value: 'fa-pixelfed' },
            { label: wp.i18n.__('Pixiv', 'all-in-one-wp-sticky-anything'), value: 'fa-pixiv' },
            { label: wp.i18n.__('PlayStation', 'all-in-one-wp-sticky-anything'), value: 'fa-playstation' },
            { label: wp.i18n.__('Product Hunt', 'all-in-one-wp-sticky-anything'), value: 'fa-product-hunt' },
            { label: wp.i18n.__('Pushed', 'all-in-one-wp-sticky-anything'), value: 'fa-pushed' },
            { label: wp.i18n.__('Python', 'all-in-one-wp-sticky-anything'), value: 'fa-python' },
            { label: wp.i18n.__('QQ', 'all-in-one-wp-sticky-anything'), value: 'fa-qq' },
            { label: wp.i18n.__('Quinscape', 'all-in-one-wp-sticky-anything'), value: 'fa-quinscape' },
            { label: wp.i18n.__('Quora', 'all-in-one-wp-sticky-anything'), value: 'fa-quora' },
            { label: wp.i18n.__('R Project', 'all-in-one-wp-sticky-anything'), value: 'fa-r-project' },
            { label: wp.i18n.__('Raspberry Pi', 'all-in-one-wp-sticky-anything'), value: 'fa-raspberry-pi' },
            { label: wp.i18n.__('Ravelry', 'all-in-one-wp-sticky-anything'), value: 'fa-ravelry' },
            { label: wp.i18n.__('React', 'all-in-one-wp-sticky-anything'), value: 'fa-react' },
            { label: wp.i18n.__('Reacteurope', 'all-in-one-wp-sticky-anything'), value: 'fa-reacteurope' },
            { label: wp.i18n.__('Readme', 'all-in-one-wp-sticky-anything'), value: 'fa-readme' },
            { label: wp.i18n.__('Rebel', 'all-in-one-wp-sticky-anything'), value: 'fa-rebel' },
            { label: wp.i18n.__('Red Hat', 'all-in-one-wp-sticky-anything'), value: 'fa-redhat' },
            { label: wp.i18n.__('Red River', 'all-in-one-wp-sticky-anything'), value: 'fa-red-river' },
            { label: wp.i18n.__('Reddit', 'all-in-one-wp-sticky-anything'), value: 'fa-reddit' },
            { label: wp.i18n.__('Reddit Alien', 'all-in-one-wp-sticky-anything'), value: 'fa-reddit-alien' },
            { label: wp.i18n.__('Renren', 'all-in-one-wp-sticky-anything'), value: 'fa-renren' },
            { label: wp.i18n.__('Replyd', 'all-in-one-wp-sticky-anything'), value: 'fa-replyd' },
            { label: wp.i18n.__('ResearchGate', 'all-in-one-wp-sticky-anything'), value: 'fa-researchgate' },
            { label: wp.i18n.__('Resolving', 'all-in-one-wp-sticky-anything'), value: 'fa-resolving' },
            { label: wp.i18n.__('Rev', 'all-in-one-wp-sticky-anything'), value: 'fa-rev' },
            { label: wp.i18n.__('Rocketchat', 'all-in-one-wp-sticky-anything'), value: 'fa-rocketchat' },
            { label: wp.i18n.__('Rockrms', 'all-in-one-wp-sticky-anything'), value: 'fa-rockrms' },
            { label: wp.i18n.__('Rust', 'all-in-one-wp-sticky-anything'), value: 'fa-rust' },
            { label: wp.i18n.__('Safari', 'all-in-one-wp-sticky-anything'), value: 'fa-safari' },
            { label: wp.i18n.__('Salesforce', 'all-in-one-wp-sticky-anything'), value: 'fa-salesforce' },
            { label: wp.i18n.__('Sass', 'all-in-one-wp-sticky-anything'), value: 'fa-sass' },
            { label: wp.i18n.__('Schlix', 'all-in-one-wp-sticky-anything'), value: 'fa-schlix' },
            { label: wp.i18n.__('ScreenPal', 'all-in-one-wp-sticky-anything'), value: 'fa-screenpal' },
            { label: wp.i18n.__('Scribd', 'all-in-one-wp-sticky-anything'), value: 'fa-scribd' },
            { label: wp.i18n.__('Searchengin', 'all-in-one-wp-sticky-anything'), value: 'fa-searchengin' },
            { label: wp.i18n.__('Select Icon', 'all-in-one-wp-sticky-anything'), value: '' },
            { label: wp.i18n.__('Sellcast', 'all-in-one-wp-sticky-anything'), value: 'fa-sellcast' },
            { label: wp.i18n.__('Sellsy', 'all-in-one-wp-sticky-anything'), value: 'fa-sellsy' },
            { label: wp.i18n.__('Servicestack', 'all-in-one-wp-sticky-anything'), value: 'fa-servicestack' },
            { label: wp.i18n.__('Shirts In Bulk', 'all-in-one-wp-sticky-anything'), value: 'fa-shirtsinbulk' },
            { label: wp.i18n.__('Shoelace', 'all-in-one-wp-sticky-anything'), value: 'fa-shoelace' },
            { label: wp.i18n.__('Shopify', 'all-in-one-wp-sticky-anything'), value: 'fa-shopify' },
            { label: wp.i18n.__('Shopware', 'all-in-one-wp-sticky-anything'), value: 'fa-shopware' },
            { label: wp.i18n.__('Signal Messenger', 'all-in-one-wp-sticky-anything'), value: 'fa-signal-messenger' },
            { label: wp.i18n.__('SimplyBuilt', 'all-in-one-wp-sticky-anything'), value: 'fa-simplybuilt' },
            { label: wp.i18n.__('Sistrix', 'all-in-one-wp-sticky-anything'), value: 'fa-sistrix' },
            { label: wp.i18n.__('Sith', 'all-in-one-wp-sticky-anything'), value: 'fa-sith' },
            { label: wp.i18n.__('Sitrox', 'all-in-one-wp-sticky-anything'), value: 'fa-sitrox' },
            { label: wp.i18n.__('Sketch', 'all-in-one-wp-sticky-anything'), value: 'fa-sketch' },
            { label: wp.i18n.__('SkyAtlas', 'all-in-one-wp-sticky-anything'), value: 'fa-skyatlas' },
            { label: wp.i18n.__('Skype', 'all-in-one-wp-sticky-anything'), value: 'fa-skype' },
            { label: wp.i18n.__('Slack', 'all-in-one-wp-sticky-anything'), value: 'fa-slack' },
            { label: wp.i18n.__('SlideShare', 'all-in-one-wp-sticky-anything'), value: 'fa-slideshare' },
            { label: wp.i18n.__('Snapchat', 'all-in-one-wp-sticky-anything'), value: 'fa-snapchat' },
            { label: wp.i18n.__('SoundCloud', 'all-in-one-wp-sticky-anything'), value: 'fa-soundcloud' },
            { label: wp.i18n.__('Sourcetree', 'all-in-one-wp-sticky-anything'), value: 'fa-sourcetree' },
            { label: wp.i18n.__('Space Awesome', 'all-in-one-wp-sticky-anything'), value: 'fa-space-awesome' },
            { label: wp.i18n.__('Speakap', 'all-in-one-wp-sticky-anything'), value: 'fa-speakap' },
            { label: wp.i18n.__('Speaker Deck', 'all-in-one-wp-sticky-anything'), value: 'fa-speaker-deck' },
            { label: wp.i18n.__('Spotify', 'all-in-one-wp-sticky-anything'), value: 'fa-spotify' },
            { label: wp.i18n.__('Square Behance', 'all-in-one-wp-sticky-anything'), value: 'fa-square-behance' },
            { label: wp.i18n.__('Square Bluesky', 'all-in-one-wp-sticky-anything'), value: 'fa-square-bluesky' },
            { label: wp.i18n.__('Square Dribbble', 'all-in-one-wp-sticky-anything'), value: 'fa-square-dribbble' },
            { label: wp.i18n.__('Square Facebook', 'all-in-one-wp-sticky-anything'), value: 'fa-square-facebook' },
            { label: wp.i18n.__('Square Figma', 'all-in-one-wp-sticky-anything'), value: 'fa-square-figma' },
            { label: wp.i18n.__('Square Font Awesome', 'all-in-one-wp-sticky-anything'), value: 'fa-square-font-awesome' },
            { label: wp.i18n.__('Square Font Awesome Stroke', 'all-in-one-wp-sticky-anything'), value: 'fa-square-font-awesome-stroke' },
            { label: wp.i18n.__('Square Git', 'all-in-one-wp-sticky-anything'), value: 'fa-square-git' },
            { label: wp.i18n.__('Square GitHub', 'all-in-one-wp-sticky-anything'), value: 'fa-square-github' },
            { label: wp.i18n.__('Square GitLab', 'all-in-one-wp-sticky-anything'), value: 'fa-square-gitlab' },
            { label: wp.i18n.__('Square Google Plus', 'all-in-one-wp-sticky-anything'), value: 'fa-square-google-plus' },
            { label: wp.i18n.__('Square Hacker News', 'all-in-one-wp-sticky-anything'), value: 'fa-square-hacker-news' },
            { label: wp.i18n.__('Square Instagram', 'all-in-one-wp-sticky-anything'), value: 'fa-square-instagram' },
            { label: wp.i18n.__('Square JS', 'all-in-one-wp-sticky-anything'), value: 'fa-square-js' },
            { label: wp.i18n.__('Square Last.fm', 'all-in-one-wp-sticky-anything'), value: 'fa-square-lastfm' },
            { label: wp.i18n.__('Square Letterboxd', 'all-in-one-wp-sticky-anything'), value: 'fa-square-letterboxd' },
            { label: wp.i18n.__('Square LinkedIn', 'all-in-one-wp-sticky-anything'), value: 'fa-square-linkedin' },
            { label: wp.i18n.__('Square Odnoklassniki', 'all-in-one-wp-sticky-anything'), value: 'fa-square-odnoklassniki' },
            { label: wp.i18n.__('Square Pied Piper', 'all-in-one-wp-sticky-anything'), value: 'fa-square-pied-piper' },
            { label: wp.i18n.__('Square Pinterest', 'all-in-one-wp-sticky-anything'), value: 'fa-square-pinterest' },
            { label: wp.i18n.__('Square Reddit', 'all-in-one-wp-sticky-anything'), value: 'fa-square-reddit' },
            { label: wp.i18n.__('Square Snapchat', 'all-in-one-wp-sticky-anything'), value: 'fa-square-snapchat' },
            { label: wp.i18n.__('Square Steam', 'all-in-one-wp-sticky-anything'), value: 'fa-square-steam' },
            { label: wp.i18n.__('Square Threads', 'all-in-one-wp-sticky-anything'), value: 'fa-square-threads' },
            { label: wp.i18n.__('Square Tumblr', 'all-in-one-wp-sticky-anything'), value: 'fa-square-tumblr' },
            { label: wp.i18n.__('Square Twitter', 'all-in-one-wp-sticky-anything'), value: 'fa-square-twitter' },
            { label: wp.i18n.__('Square Upwork', 'all-in-one-wp-sticky-anything'), value: 'fa-square-upwork' },
            { label: wp.i18n.__('Square Viadeo', 'all-in-one-wp-sticky-anything'), value: 'fa-square-viadeo' },
            { label: wp.i18n.__('Square Vimeo', 'all-in-one-wp-sticky-anything'), value: 'fa-square-vimeo' },
            { label: wp.i18n.__('Square Web Awesome', 'all-in-one-wp-sticky-anything'), value: 'fa-square-web-awesome' },
            { label: wp.i18n.__('Square Web Awesome Stroke', 'all-in-one-wp-sticky-anything'), value: 'fa-square-web-awesome-stroke' },
            { label: wp.i18n.__('Square WhatsApp', 'all-in-one-wp-sticky-anything'), value: 'fa-square-whatsapp' },
            { label: wp.i18n.__('Square X Twitter', 'all-in-one-wp-sticky-anything'), value: 'fa-square-x-twitter' },
            { label: wp.i18n.__('Square Xing', 'all-in-one-wp-sticky-anything'), value: 'fa-square-xing' },
            { label: wp.i18n.__('Square YouTube', 'all-in-one-wp-sticky-anything'), value: 'fa-square-youtube' },
            { label: wp.i18n.__('Squarespace', 'all-in-one-wp-sticky-anything'), value: 'fa-squarespace' },
            { label: wp.i18n.__('Stack Exchange', 'all-in-one-wp-sticky-anything'), value: 'fa-stack-exchange' },
            { label: wp.i18n.__('Stack Overflow', 'all-in-one-wp-sticky-anything'), value: 'fa-stack-overflow' },
            { label: wp.i18n.__('Stackpath', 'all-in-one-wp-sticky-anything'), value: 'fa-stackpath' },
            { label: wp.i18n.__('Staylinked', 'all-in-one-wp-sticky-anything'), value: 'fa-staylinked' },
            { label: wp.i18n.__('Steam', 'all-in-one-wp-sticky-anything'), value: 'fa-steam' },
            { label: wp.i18n.__('Steam Symbol', 'all-in-one-wp-sticky-anything'), value: 'fa-steam-symbol' },
            { label: wp.i18n.__('Sticker Mule', 'all-in-one-wp-sticky-anything'), value: 'fa-sticker-mule' },
            { label: wp.i18n.__('Strava', 'all-in-one-wp-sticky-anything'), value: 'fa-strava' },
            { label: wp.i18n.__('Stripe', 'all-in-one-wp-sticky-anything'), value: 'fa-stripe' },
            { label: wp.i18n.__('Stripe S', 'all-in-one-wp-sticky-anything'), value: 'fa-stripe-s' },
            { label: wp.i18n.__('Stubber', 'all-in-one-wp-sticky-anything'), value: 'fa-stubber' },
            { label: wp.i18n.__('Studiovinari', 'all-in-one-wp-sticky-anything'), value: 'fa-studiovinari' },
            { label: wp.i18n.__('StumbleUpon', 'all-in-one-wp-sticky-anything'), value: 'fa-stumbleupon' },
            { label: wp.i18n.__('StumbleUpon Circle', 'all-in-one-wp-sticky-anything'), value: 'fa-stumbleupon-circle' },
            { label: wp.i18n.__('Superpowers', 'all-in-one-wp-sticky-anything'), value: 'fa-superpowers' },
            { label: wp.i18n.__('Supple', 'all-in-one-wp-sticky-anything'), value: 'fa-supple' },
            { label: wp.i18n.__('SUSE', 'all-in-one-wp-sticky-anything'), value: 'fa-suse' },
            { label: wp.i18n.__('Swift', 'all-in-one-wp-sticky-anything'), value: 'fa-swift' },
            { label: wp.i18n.__('Symfony', 'all-in-one-wp-sticky-anything'), value: 'fa-symfony' },
            { label: wp.i18n.__('TeamSpeak', 'all-in-one-wp-sticky-anything'), value: 'fa-teamspeak' },
            { label: wp.i18n.__('TeX', 'all-in-one-wp-sticky-anything'), value: 'fa-tex' },
            { label: wp.i18n.__('Telegram', 'all-in-one-wp-sticky-anything'), value: 'fa-telegram' },
            { label: wp.i18n.__('Tencent Weibo', 'all-in-one-wp-sticky-anything'), value: 'fa-tencent-weibo' },
            { label: wp.i18n.__('The Red Yeti', 'all-in-one-wp-sticky-anything'), value: 'fa-the-red-yeti' },
            { label: wp.i18n.__('Themeco', 'all-in-one-wp-sticky-anything'), value: 'fa-themeco' },
            { label: wp.i18n.__('ThemeIsle', 'all-in-one-wp-sticky-anything'), value: 'fa-themeisle' },
            { label: wp.i18n.__('Think Peaks', 'all-in-one-wp-sticky-anything'), value: 'fa-think-peaks' },
            { label: wp.i18n.__('Threads', 'all-in-one-wp-sticky-anything'), value: 'fa-threads' },
            { label: wp.i18n.__('Tidal', 'all-in-one-wp-sticky-anything'), value: 'fa-tidal' },
            { label: wp.i18n.__('TikTok', 'all-in-one-wp-sticky-anything'), value: 'fa-tiktok' },
            { label: wp.i18n.__('Trade Federation', 'all-in-one-wp-sticky-anything'), value: 'fa-trade-federation' },
            { label: wp.i18n.__('Trello', 'all-in-one-wp-sticky-anything'), value: 'fa-trello' },
            { label: wp.i18n.__('Tumblr', 'all-in-one-wp-sticky-anything'), value: 'fa-tumblr' },
            { label: wp.i18n.__('Twitch', 'all-in-one-wp-sticky-anything'), value: 'fa-twitch' },
            { label: wp.i18n.__('Twitter', 'all-in-one-wp-sticky-anything'), value: 'fa-twitter' },
            { label: wp.i18n.__('Typo3', 'all-in-one-wp-sticky-anything'), value: 'fa-typo3' },
            { label: wp.i18n.__('Uber', 'all-in-one-wp-sticky-anything'), value: 'fa-uber' },
            { label: wp.i18n.__('Ubuntu', 'all-in-one-wp-sticky-anything'), value: 'fa-ubuntu' },
            { label: wp.i18n.__('UIkit', 'all-in-one-wp-sticky-anything'), value: 'fa-uikit' },
            { label: wp.i18n.__('Umbraco', 'all-in-one-wp-sticky-anything'), value: 'fa-umbraco' },
            { label: wp.i18n.__('Uncharted', 'all-in-one-wp-sticky-anything'), value: 'fa-uncharted' },
            { label: wp.i18n.__('Unity', 'all-in-one-wp-sticky-anything'), value: 'fa-unity' },
            { label: wp.i18n.__('Uniregistry', 'all-in-one-wp-sticky-anything'), value: 'fa-uniregistry' },
            { label: wp.i18n.__('Unsplash', 'all-in-one-wp-sticky-anything'), value: 'fa-unsplash' },
            { label: wp.i18n.__('Untappd', 'all-in-one-wp-sticky-anything'), value: 'fa-untappd' },
            { label: wp.i18n.__('UPS', 'all-in-one-wp-sticky-anything'), value: 'fa-ups' },
            { label: wp.i18n.__('Upwork', 'all-in-one-wp-sticky-anything'), value: 'fa-upwork' },
            { label: wp.i18n.__('USB', 'all-in-one-wp-sticky-anything'), value: 'fa-usb' },
            { label: wp.i18n.__('USPS', 'all-in-one-wp-sticky-anything'), value: 'fa-usps' },
            { label: wp.i18n.__('Ussunnah', 'all-in-one-wp-sticky-anything'), value: 'fa-ussunnah' },
            { label: wp.i18n.__('Vaadin', 'all-in-one-wp-sticky-anything'), value: 'fa-vaadin' },
            { label: wp.i18n.__('Viacoin', 'all-in-one-wp-sticky-anything'), value: 'fa-viacoin' },
            { label: wp.i18n.__('Viadeo', 'all-in-one-wp-sticky-anything'), value: 'fa-viadeo' },
            { label: wp.i18n.__('Viber', 'all-in-one-wp-sticky-anything'), value: 'fa-viber' },
            { label: wp.i18n.__('Vimeo', 'all-in-one-wp-sticky-anything'), value: 'fa-vimeo' },
            { label: wp.i18n.__('Vimeo V', 'all-in-one-wp-sticky-anything'), value: 'fa-vimeo-v' },
            { label: wp.i18n.__('Vine', 'all-in-one-wp-sticky-anything'), value: 'fa-vine' },
            { label: wp.i18n.__('VK', 'all-in-one-wp-sticky-anything'), value: 'fa-vk' },
            { label: wp.i18n.__('VNV', 'all-in-one-wp-sticky-anything'), value: 'fa-vnv' },
            { label: wp.i18n.__('VSCO', 'all-in-one-wp-sticky-anything'), value: 'fa-vsco' },
            { label: wp.i18n.__('VueJS', 'all-in-one-wp-sticky-anything'), value: 'fa-vuejs' },
            { label: wp.i18n.__('Watchman Monitoring', 'all-in-one-wp-sticky-anything'), value: 'fa-watchman-monitoring' },
            { label: wp.i18n.__('Waze', 'all-in-one-wp-sticky-anything'), value: 'fa-waze' },
            { label: wp.i18n.__('Webflow', 'all-in-one-wp-sticky-anything'), value: 'fa-webflow' },
            { label: wp.i18n.__('Web Awesome', 'all-in-one-wp-sticky-anything'), value: 'fa-web-awesome' },
            { label: wp.i18n.__('Weebly', 'all-in-one-wp-sticky-anything'), value: 'fa-weebly' },
            { label: wp.i18n.__('Weibo', 'all-in-one-wp-sticky-anything'), value: 'fa-weibo' },
            { label: wp.i18n.__('Weixin', 'all-in-one-wp-sticky-anything'), value: 'fa-weixin' },
            { label: wp.i18n.__('WhatsApp', 'all-in-one-wp-sticky-anything'), value: 'fa-whatsapp' },
            { label: wp.i18n.__('WHMCS', 'all-in-one-wp-sticky-anything'), value: 'fa-whmcs' },
            { label: wp.i18n.__('Wikipedia W', 'all-in-one-wp-sticky-anything'), value: 'fa-wikipedia-w' },
            { label: wp.i18n.__('Windows', 'all-in-one-wp-sticky-anything'), value: 'fa-windows' },
            { label: wp.i18n.__('Wirsindhandwerk', 'all-in-one-wp-sticky-anything'), value: 'fa-wirsindhandwerk' },
            { label: wp.i18n.__('Wix', 'all-in-one-wp-sticky-anything'), value: 'fa-wix' },
            { label: wp.i18n.__('Wizards of the Coast', 'all-in-one-wp-sticky-anything'), value: 'fa-wizards-of-the-coast' },
            { label: wp.i18n.__('Wodu', 'all-in-one-wp-sticky-anything'), value: 'fa-wodu' },
            { label: wp.i18n.__('Wolf Pack Battalion', 'all-in-one-wp-sticky-anything'), value: 'fa-wolf-pack-battalion' },
            { label: wp.i18n.__('WordPress', 'all-in-one-wp-sticky-anything'), value: 'fa-wordpress' },
            { label: wp.i18n.__('WordPress Simple', 'all-in-one-wp-sticky-anything'), value: 'fa-wordpress-simple' },
            { label: wp.i18n.__('WPBeginner', 'all-in-one-wp-sticky-anything'), value: 'fa-wpbeginner' },
            { label: wp.i18n.__('WPExplorer', 'all-in-one-wp-sticky-anything'), value: 'fa-wpexplorer' },
            { label: wp.i18n.__('WPForms', 'all-in-one-wp-sticky-anything'), value: 'fa-wpforms' },
            { label: wp.i18n.__('W3C', 'all-in-one-wp-sticky-anything'), value: 'fa-w3c' },
            { label: wp.i18n.__('X Twitter', 'all-in-one-wp-sticky-anything'), value: 'fa-x-twitter' },
            { label: wp.i18n.__('Xbox', 'all-in-one-wp-sticky-anything'), value: 'fa-xbox' },
            { label: wp.i18n.__('Xing', 'all-in-one-wp-sticky-anything'), value: 'fa-xing' },
            { label: wp.i18n.__('Y Combinator', 'all-in-one-wp-sticky-anything'), value: 'fa-y-combinator' },
            { label: wp.i18n.__('Yahoo', 'all-in-one-wp-sticky-anything'), value: 'fa-yahoo' },
            { label: wp.i18n.__('Yammer', 'all-in-one-wp-sticky-anything'), value: 'fa-yammer' },
            { label: wp.i18n.__('Yandex', 'all-in-one-wp-sticky-anything'), value: 'fa-yandex' },
            { label: wp.i18n.__('Yandex International', 'all-in-one-wp-sticky-anything'), value: 'fa-yandex-international' },
            { label: wp.i18n.__('Yarn', 'all-in-one-wp-sticky-anything'), value: 'fa-yarn' },
            { label: wp.i18n.__('Yelp', 'all-in-one-wp-sticky-anything'), value: 'fa-yelp' },
            { label: wp.i18n.__('Yoast', 'all-in-one-wp-sticky-anything'), value: 'fa-yoast' },
            { label: wp.i18n.__('YouTube', 'all-in-one-wp-sticky-anything'), value: 'fa-youtube' },
            { label: wp.i18n.__('Zhihu', 'all-in-one-wp-sticky-anything'), value: 'fa-zhihu' }
        ],
        bootstrap: [
            { label: wp.i18n.__('Select Icon', 'all-in-one-wp-sticky-anything'), value: '' },
            { label: wp.i18n.__('Alexa', 'all-in-one-wp-sticky-anything'), value: 'bi-alexa' },
            { label: wp.i18n.__('Alipay', 'all-in-one-wp-sticky-anything'), value: 'bi-alipay' },
            { label: wp.i18n.__('Amazon', 'all-in-one-wp-sticky-anything'), value: 'bi-amazon' },
            { label: wp.i18n.__('AMD', 'all-in-one-wp-sticky-anything'), value: 'bi-amd' },
            { label: wp.i18n.__('Android', 'all-in-one-wp-sticky-anything'), value: 'bi-android' },
            { label: wp.i18n.__('Android2', 'all-in-one-wp-sticky-anything'), value: 'bi-android2' },
            { label: wp.i18n.__('Anthropic', 'all-in-one-wp-sticky-anything'), value: 'bi-anthropic' },
            { label: wp.i18n.__('Apple', 'all-in-one-wp-sticky-anything'), value: 'bi-apple' },
            { label: wp.i18n.__('Apple Music', 'all-in-one-wp-sticky-anything'), value: 'bi-apple-music' },
            { label: wp.i18n.__('Behance', 'all-in-one-wp-sticky-anything'), value: 'bi-behance' },
            { label: wp.i18n.__('Bing', 'all-in-one-wp-sticky-anything'), value: 'bi-bing' },
            { label: wp.i18n.__('Bluesky', 'all-in-one-wp-sticky-anything'), value: 'bi-bluesky' },
            { label: wp.i18n.__('Browser Chrome', 'all-in-one-wp-sticky-anything'), value: 'bi-browser-chrome' },
            { label: wp.i18n.__('Browser Edge', 'all-in-one-wp-sticky-anything'), value: 'bi-browser-edge' },
            { label: wp.i18n.__('Browser Firefox', 'all-in-one-wp-sticky-anything'), value: 'bi-browser-firefox' },
            { label: wp.i18n.__('Browser Safari', 'all-in-one-wp-sticky-anything'), value: 'bi-browser-safari' },
            { label: wp.i18n.__('Claude', 'all-in-one-wp-sticky-anything'), value: 'bi-claude' },
            { label: wp.i18n.__('CSS', 'all-in-one-wp-sticky-anything'), value: 'bi-css' },
            { label: wp.i18n.__('Discord', 'all-in-one-wp-sticky-anything'), value: 'bi-discord' },
            { label: wp.i18n.__('Dribbble', 'all-in-one-wp-sticky-anything'), value: 'bi-dribbble' },
            { label: wp.i18n.__('Dropbox', 'all-in-one-wp-sticky-anything'), value: 'bi-dropbox' },
            { label: wp.i18n.__('Facebook', 'all-in-one-wp-sticky-anything'), value: 'bi-facebook' },
            { label: wp.i18n.__('Git', 'all-in-one-wp-sticky-anything'), value: 'bi-git' },
            { label: wp.i18n.__('GitHub', 'all-in-one-wp-sticky-anything'), value: 'bi-github' },
            { label: wp.i18n.__('GitLab', 'all-in-one-wp-sticky-anything'), value: 'bi-gitlab' },
            { label: wp.i18n.__('Google', 'all-in-one-wp-sticky-anything'), value: 'bi-google' },
            { label: wp.i18n.__('Google Play', 'all-in-one-wp-sticky-anything'), value: 'bi-google-play' },
            { label: wp.i18n.__('Instagram', 'all-in-one-wp-sticky-anything'), value: 'bi-instagram' },
            { label: wp.i18n.__('JavaScript', 'all-in-one-wp-sticky-anything'), value: 'bi-javascript' },
            { label: wp.i18n.__('Line', 'all-in-one-wp-sticky-anything'), value: 'bi-line' },
            { label: wp.i18n.__('LinkedIn', 'all-in-one-wp-sticky-anything'), value: 'bi-linkedin' },
            { label: wp.i18n.__('Mastodon', 'all-in-one-wp-sticky-anything'), value: 'bi-mastodon' },
            { label: wp.i18n.__('Medium', 'all-in-one-wp-sticky-anything'), value: 'bi-medium' },
            { label: wp.i18n.__('Messenger', 'all-in-one-wp-sticky-anything'), value: 'bi-messenger' },
            { label: wp.i18n.__('Meta', 'all-in-one-wp-sticky-anything'), value: 'bi-meta' },
            { label: wp.i18n.__('Microsoft', 'all-in-one-wp-sticky-anything'), value: 'bi-microsoft' },
            { label: wp.i18n.__('Microsoft Teams', 'all-in-one-wp-sticky-anything'), value: 'bi-microsoft-teams' },
            { label: wp.i18n.__('Nintendo Switch', 'all-in-one-wp-sticky-anything'), value: 'bi-nintendo-switch' },
            { label: wp.i18n.__('Nvidia', 'all-in-one-wp-sticky-anything'), value: 'bi-nvidia' },
            { label: wp.i18n.__('OpenAI', 'all-in-one-wp-sticky-anything'), value: 'bi-openai' },
            { label: wp.i18n.__('OpenCollective', 'all-in-one-wp-sticky-anything'), value: 'bi-opencollective' },
            { label: wp.i18n.__('PayPal', 'all-in-one-wp-sticky-anything'), value: 'bi-paypal' },
            { label: wp.i18n.__('Perplexity', 'all-in-one-wp-sticky-anything'), value: 'bi-perplexity' },
            { label: wp.i18n.__('Pinterest', 'all-in-one-wp-sticky-anything'), value: 'bi-pinterest' },
            { label: wp.i18n.__('PlayStation', 'all-in-one-wp-sticky-anything'), value: 'bi-playstation' },
            { label: wp.i18n.__('Quora', 'all-in-one-wp-sticky-anything'), value: 'bi-quora' },
            { label: wp.i18n.__('Reddit', 'all-in-one-wp-sticky-anything'), value: 'bi-reddit' },
            { label: wp.i18n.__('Signal', 'all-in-one-wp-sticky-anything'), value: 'bi-signal' },
            { label: wp.i18n.__('Sina Weibo', 'all-in-one-wp-sticky-anything'), value: 'bi-sina-weibo' },
            { label: wp.i18n.__('Skype', 'all-in-one-wp-sticky-anything'), value: 'bi-skype' },
            { label: wp.i18n.__('Slack', 'all-in-one-wp-sticky-anything'), value: 'bi-slack' },
            { label: wp.i18n.__('Snapchat', 'all-in-one-wp-sticky-anything'), value: 'bi-snapchat' },
            { label: wp.i18n.__('SourceForge', 'all-in-one-wp-sticky-anything'), value: 'bi-sourceforge' },
            { label: wp.i18n.__('Spotify', 'all-in-one-wp-sticky-anything'), value: 'bi-spotify' },
            { label: wp.i18n.__('Stack Overflow', 'all-in-one-wp-sticky-anything'), value: 'bi-stack-overflow' },
            { label: wp.i18n.__('Steam', 'all-in-one-wp-sticky-anything'), value: 'bi-steam' },
            { label: wp.i18n.__('Strava', 'all-in-one-wp-sticky-anything'), value: 'bi-strava' },
            { label: wp.i18n.__('Stripe', 'all-in-one-wp-sticky-anything'), value: 'bi-stripe' },
            { label: wp.i18n.__('Substack', 'all-in-one-wp-sticky-anything'), value: 'bi-substack' },
            { label: wp.i18n.__('Telegram', 'all-in-one-wp-sticky-anything'), value: 'bi-telegram' },
            { label: wp.i18n.__('Tencent QQ', 'all-in-one-wp-sticky-anything'), value: 'bi-tencent-qq' },
            { label: wp.i18n.__('Threads', 'all-in-one-wp-sticky-anything'), value: 'bi-threads' },
            { label: wp.i18n.__('Threads Fill', 'all-in-one-wp-sticky-anything'), value: 'bi-threads-fill' },
            { label: wp.i18n.__('TikTok', 'all-in-one-wp-sticky-anything'), value: 'bi-tiktok' },
            { label: wp.i18n.__('Trello', 'all-in-one-wp-sticky-anything'), value: 'bi-trello' },
            { label: wp.i18n.__('Twitch', 'all-in-one-wp-sticky-anything'), value: 'bi-twitch' },
            { label: wp.i18n.__('Twitter', 'all-in-one-wp-sticky-anything'), value: 'bi-twitter' },
            { label: wp.i18n.__('Twitter X', 'all-in-one-wp-sticky-anything'), value: 'bi-twitter-x' },
            { label: wp.i18n.__('Tux', 'all-in-one-wp-sticky-anything'), value: 'bi-tux' },
            { label: wp.i18n.__('TypeScript', 'all-in-one-wp-sticky-anything'), value: 'bi-typescript' },
            { label: wp.i18n.__('Ubuntu', 'all-in-one-wp-sticky-anything'), value: 'bi-ubuntu' },
            { label: wp.i18n.__('Unity', 'all-in-one-wp-sticky-anything'), value: 'bi-unity' },
            { label: wp.i18n.__('Vimeo', 'all-in-one-wp-sticky-anything'), value: 'bi-vimeo' },
            { label: wp.i18n.__('WeChat', 'all-in-one-wp-sticky-anything'), value: 'bi-wechat' },
            { label: wp.i18n.__('WhatsApp', 'all-in-one-wp-sticky-anything'), value: 'bi-whatsapp' },
            { label: wp.i18n.__('Wikipedia', 'all-in-one-wp-sticky-anything'), value: 'bi-wikipedia' },
            { label: wp.i18n.__('Windows', 'all-in-one-wp-sticky-anything'), value: 'bi-windows' },
            { label: wp.i18n.__('WordPress', 'all-in-one-wp-sticky-anything'), value: 'bi-wordpress' },
            { label: wp.i18n.__('Xbox', 'all-in-one-wp-sticky-anything'), value: 'bi-xbox' },
            { label: wp.i18n.__('Yelp', 'all-in-one-wp-sticky-anything'), value: 'bi-yelp' },
            { label: wp.i18n.__('YouTube', 'all-in-one-wp-sticky-anything'), value: 'bi-youtube' }
        ],
        remixicon: [
            { label: wp.i18n.__('Select Icon', 'all-in-one-wp-sticky-anything'), value: '' },
            { label: wp.i18n.__('Alibaba Cloud Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-alibaba-cloud-fill' },
            { label: wp.i18n.__('Alibaba Cloud Line', 'all-in-one-wp-sticky-anything'), value: 'ri-alibaba-cloud-line' },
            { label: wp.i18n.__('Alipay Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-alipay-fill' },
            { label: wp.i18n.__('Alipay Line', 'all-in-one-wp-sticky-anything'), value: 'ri-alipay-line' },
            { label: wp.i18n.__('Amazon Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-amazon-fill' },
            { label: wp.i18n.__('Amazon Line', 'all-in-one-wp-sticky-anything'), value: 'ri-amazon-line' },
            { label: wp.i18n.__('Android Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-android-fill' },
            { label: wp.i18n.__('Android Line', 'all-in-one-wp-sticky-anything'), value: 'ri-android-line' },
            { label: wp.i18n.__('AngularJS Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-angularjs-fill' },
            { label: wp.i18n.__('AngularJS Line', 'all-in-one-wp-sticky-anything'), value: 'ri-angularjs-line' },
            { label: wp.i18n.__('Anthropic Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-anthropic-fill' },
            { label: wp.i18n.__('Anthropic Line', 'all-in-one-wp-sticky-anything'), value: 'ri-anthropic-line' },
            { label: wp.i18n.__('App Store Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-app-store-fill' },
            { label: wp.i18n.__('App Store Line', 'all-in-one-wp-sticky-anything'), value: 'ri-app-store-line' },
            { label: wp.i18n.__('Apple Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-apple-fill' },
            { label: wp.i18n.__('Apple Line', 'all-in-one-wp-sticky-anything'), value: 'ri-apple-line' },
            { label: wp.i18n.__('Baidu Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-baidu-fill' },
            { label: wp.i18n.__('Baidu Line', 'all-in-one-wp-sticky-anything'), value: 'ri-baidu-line' },
            { label: wp.i18n.__('Bard Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-bard-fill' },
            { label: wp.i18n.__('Bard Line', 'all-in-one-wp-sticky-anything'), value: 'ri-bard-line' },
            { label: wp.i18n.__('Behance Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-behance-fill' },
            { label: wp.i18n.__('Behance Line', 'all-in-one-wp-sticky-anything'), value: 'ri-behance-line' },
            { label: wp.i18n.__('Bilibili Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-bilibili-fill' },
            { label: wp.i18n.__('Bilibili Line', 'all-in-one-wp-sticky-anything'), value: 'ri-bilibili-line' },
            { label: wp.i18n.__('Blender Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-blender-fill' },
            { label: wp.i18n.__('Blender Line', 'all-in-one-wp-sticky-anything'), value: 'ri-blender-line' },
            { label: wp.i18n.__('Blogger Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-blogger-fill' },
            { label: wp.i18n.__('Blogger Line', 'all-in-one-wp-sticky-anything'), value: 'ri-blogger-line' },
            { label: wp.i18n.__('Bluesky Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-bluesky-fill' },
            { label: wp.i18n.__('Bluesky Line', 'all-in-one-wp-sticky-anything'), value: 'ri-bluesky-line' },
            { label: wp.i18n.__('BNB Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-bnb-fill' },
            { label: wp.i18n.__('BNB Line', 'all-in-one-wp-sticky-anything'), value: 'ri-bnb-line' },
            { label: wp.i18n.__('Bootstrap Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-bootstrap-fill' },
            { label: wp.i18n.__('Bootstrap Line', 'all-in-one-wp-sticky-anything'), value: 'ri-bootstrap-line' },
            { label: wp.i18n.__('BTC Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-btc-fill' },
            { label: wp.i18n.__('BTC Line', 'all-in-one-wp-sticky-anything'), value: 'ri-btc-line' },
            { label: wp.i18n.__('CentOS Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-centos-fill' },
            { label: wp.i18n.__('CentOS Line', 'all-in-one-wp-sticky-anything'), value: 'ri-centos-line' },
            { label: wp.i18n.__('Chrome Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-chrome-fill' },
            { label: wp.i18n.__('Chrome Line', 'all-in-one-wp-sticky-anything'), value: 'ri-chrome-line' },
            { label: wp.i18n.__('Claude Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-claude-fill' },
            { label: wp.i18n.__('Claude Line', 'all-in-one-wp-sticky-anything'), value: 'ri-claude-line' },
            { label: wp.i18n.__('Codepen Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-codepen-fill' },
            { label: wp.i18n.__('Codepen Line', 'all-in-one-wp-sticky-anything'), value: 'ri-codepen-line' },
            { label: wp.i18n.__('Copilot Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-copilot-fill' },
            { label: wp.i18n.__('Copilot Line', 'all-in-one-wp-sticky-anything'), value: 'ri-copilot-line' },
            { label: wp.i18n.__('CoreOS Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-coreos-fill' },
            { label: wp.i18n.__('CoreOS Line', 'all-in-one-wp-sticky-anything'), value: 'ri-coreos-line' },
            { label: wp.i18n.__('CSS3 Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-css3-fill' },
            { label: wp.i18n.__('CSS3 Line', 'all-in-one-wp-sticky-anything'), value: 'ri-css3-line' },
            { label: wp.i18n.__('Deepseek Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-deepseek-fill' },
            { label: wp.i18n.__('Deepseek Line', 'all-in-one-wp-sticky-anything'), value: 'ri-deepseek-line' },
            { label: wp.i18n.__('DingDing Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-dingding-fill' },
            { label: wp.i18n.__('DingDing Line', 'all-in-one-wp-sticky-anything'), value: 'ri-dingding-line' },
            { label: wp.i18n.__('Discord Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-discord-fill' },
            { label: wp.i18n.__('Discord Line', 'all-in-one-wp-sticky-anything'), value: 'ri-discord-line' },
            { label: wp.i18n.__('Disqus Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-disqus-fill' },
            { label: wp.i18n.__('Disqus Line', 'all-in-one-wp-sticky-anything'), value: 'ri-disqus-line' },
            { label: wp.i18n.__('Douban Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-douban-fill' },
            { label: wp.i18n.__('Douban Line', 'all-in-one-wp-sticky-anything'), value: 'ri-douban-line' },
            { label: wp.i18n.__('Dribbble Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-dribbble-fill' },
            { label: wp.i18n.__('Dribbble Line', 'all-in-one-wp-sticky-anything'), value: 'ri-dribbble-line' },
            { label: wp.i18n.__('Dropbox Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-dropbox-fill' },
            { label: wp.i18n.__('Dropbox Line', 'all-in-one-wp-sticky-anything'), value: 'ri-dropbox-line' },
            { label: wp.i18n.__('Edge Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-edge-fill' },
            { label: wp.i18n.__('Edge Line', 'all-in-one-wp-sticky-anything'), value: 'ri-edge-line' },
            { label: wp.i18n.__('Edge New Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-edge-new-fill' },
            { label: wp.i18n.__('Edge New Line', 'all-in-one-wp-sticky-anything'), value: 'ri-edge-new-line' },
            { label: wp.i18n.__('ETH Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-eth-fill' },
            { label: wp.i18n.__('ETH Line', 'all-in-one-wp-sticky-anything'), value: 'ri-eth-line' },
            { label: wp.i18n.__('Evernote Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-evernote-fill' },
            { label: wp.i18n.__('Evernote Line', 'all-in-one-wp-sticky-anything'), value: 'ri-evernote-line' },
            { label: wp.i18n.__('Facebook Box Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-facebook-box-fill' },
            { label: wp.i18n.__('Facebook Box Line', 'all-in-one-wp-sticky-anything'), value: 'ri-facebook-box-line' },
            { label: wp.i18n.__('Facebook Circle Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-facebook-circle-fill' },
            { label: wp.i18n.__('Facebook Circle Line', 'all-in-one-wp-sticky-anything'), value: 'ri-facebook-circle-line' },
            { label: wp.i18n.__('Facebook Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-facebook-fill' },
            { label: wp.i18n.__('Facebook Line', 'all-in-one-wp-sticky-anything'), value: 'ri-facebook-line' },
            { label: wp.i18n.__('Fediverse Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-fediverse-fill' },
            { label: wp.i18n.__('Fediverse Line', 'all-in-one-wp-sticky-anything'), value: 'ri-fediverse-line' },
            { label: wp.i18n.__('Figma Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-figma-fill' },
            { label: wp.i18n.__('Figma Line', 'all-in-one-wp-sticky-anything'), value: 'ri-figma-line' },
            { label: wp.i18n.__('Finder Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-finder-fill' },
            { label: wp.i18n.__('Finder Line', 'all-in-one-wp-sticky-anything'), value: 'ri-finder-line' },
            { label: wp.i18n.__('Firebase Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-firebase-fill' },
            { label: wp.i18n.__('Firebase Line', 'all-in-one-wp-sticky-anything'), value: 'ri-firebase-line' },
            { label: wp.i18n.__('Firefox Browser Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-firefox-browser-fill' },
            { label: wp.i18n.__('Firefox Browser Line', 'all-in-one-wp-sticky-anything'), value: 'ri-firefox-browser-line' },
            { label: wp.i18n.__('Firefox Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-firefox-fill' },
            { label: wp.i18n.__('Firefox Line', 'all-in-one-wp-sticky-anything'), value: 'ri-firefox-line' },
            { label: wp.i18n.__('Flickr Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-flickr-fill' },
            { label: wp.i18n.__('Flickr Line', 'all-in-one-wp-sticky-anything'), value: 'ri-flickr-line' },
            { label: wp.i18n.__('Flutter Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-flutter-fill' },
            { label: wp.i18n.__('Flutter Line', 'all-in-one-wp-sticky-anything'), value: 'ri-flutter-line' },
            { label: wp.i18n.__('Friendica Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-friendica-fill' },
            { label: wp.i18n.__('Friendica Line', 'all-in-one-wp-sticky-anything'), value: 'ri-friendica-line' },
            { label: wp.i18n.__('Gatsby Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-gatsby-fill' },
            { label: wp.i18n.__('Gatsby Line', 'all-in-one-wp-sticky-anything'), value: 'ri-gatsby-line' },
            { label: wp.i18n.__('Gemini Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-gemini-fill' },
            { label: wp.i18n.__('Gemini Line', 'all-in-one-wp-sticky-anything'), value: 'ri-gemini-line' },
            { label: wp.i18n.__('GitHub Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-github-fill' },
            { label: wp.i18n.__('GitHub Line', 'all-in-one-wp-sticky-anything'), value: 'ri-github-line' },
            { label: wp.i18n.__('GitLab Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-gitlab-fill' },
            { label: wp.i18n.__('GitLab Line', 'all-in-one-wp-sticky-anything'), value: 'ri-gitlab-line' },
            { label: wp.i18n.__('Google Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-google-fill' },
            { label: wp.i18n.__('Google Line', 'all-in-one-wp-sticky-anything'), value: 'ri-google-line' },
            { label: wp.i18n.__('Google Play Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-google-play-fill' },
            { label: wp.i18n.__('Google Play Line', 'all-in-one-wp-sticky-anything'), value: 'ri-google-play-line' },
            { label: wp.i18n.__('Honor of Kings Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-honor-of-kings-fill' },
            { label: wp.i18n.__('Honor of Kings Line', 'all-in-one-wp-sticky-anything'), value: 'ri-honor-of-kings-line' },
            { label: wp.i18n.__('HTML5 Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-html5-fill' },
            { label: wp.i18n.__('HTML5 Line', 'all-in-one-wp-sticky-anything'), value: 'ri-html5-line' },
            { label: wp.i18n.__('IE Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-ie-fill' },
            { label: wp.i18n.__('IE Line', 'all-in-one-wp-sticky-anything'), value: 'ri-ie-line' },
            { label: wp.i18n.__('Instagram Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-instagram-fill' },
            { label: wp.i18n.__('Instagram Line', 'all-in-one-wp-sticky-anything'), value: 'ri-instagram-line' },
            { label: wp.i18n.__('Invision Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-invision-fill' },
            { label: wp.i18n.__('Invision Line', 'all-in-one-wp-sticky-anything'), value: 'ri-invision-line' },
            { label: wp.i18n.__('Java Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-java-fill' },
            { label: wp.i18n.__('Java Line', 'all-in-one-wp-sticky-anything'), value: 'ri-java-line' },
            { label: wp.i18n.__('JavaScript Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-javascript-fill' },
            { label: wp.i18n.__('JavaScript Line', 'all-in-one-wp-sticky-anything'), value: 'ri-javascript-line' },
            { label: wp.i18n.__('Kakao Talk Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-kakao-talk-fill' },
            { label: wp.i18n.__('Kakao Talk Line', 'all-in-one-wp-sticky-anything'), value: 'ri-kakao-talk-line' },
            { label: wp.i18n.__('Kick Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-kick-fill' },
            { label: wp.i18n.__('Kick Line', 'all-in-one-wp-sticky-anything'), value: 'ri-kick-line' },
            { label: wp.i18n.__('Line Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-line-fill' },
            { label: wp.i18n.__('Line Line', 'all-in-one-wp-sticky-anything'), value: 'ri-line-line' },
            { label: wp.i18n.__('LinkedIn Box Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-linkedin-box-fill' },
            { label: wp.i18n.__('LinkedIn Box Line', 'all-in-one-wp-sticky-anything'), value: 'ri-linkedin-box-line' },
            { label: wp.i18n.__('LinkedIn Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-linkedin-fill' },
            { label: wp.i18n.__('LinkedIn Line', 'all-in-one-wp-sticky-anything'), value: 'ri-linkedin-line' },
            { label: wp.i18n.__('Mac Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-mac-fill' },
            { label: wp.i18n.__('Mac Line', 'all-in-one-wp-sticky-anything'), value: 'ri-mac-line' },
            { label: wp.i18n.__('Macbook Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-macbook-fill' },
            { label: wp.i18n.__('Macbook Line', 'all-in-one-wp-sticky-anything'), value: 'ri-macbook-line' },
            { label: wp.i18n.__('Mastercard Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-mastercard-fill' },
            { label: wp.i18n.__('Mastercard Line', 'all-in-one-wp-sticky-anything'), value: 'ri-mastercard-line' },
            { label: wp.i18n.__('Mastodon Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-mastodon-fill' },
            { label: wp.i18n.__('Mastodon Line', 'all-in-one-wp-sticky-anything'), value: 'ri-mastodon-line' },
            { label: wp.i18n.__('Medium Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-medium-fill' },
            { label: wp.i18n.__('Medium Line', 'all-in-one-wp-sticky-anything'), value: 'ri-medium-line' },
            { label: wp.i18n.__('Messenger Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-messenger-fill' },
            { label: wp.i18n.__('Messenger Line', 'all-in-one-wp-sticky-anything'), value: 'ri-messenger-line' },
            { label: wp.i18n.__('Meta Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-meta-fill' },
            { label: wp.i18n.__('Meta Line', 'all-in-one-wp-sticky-anything'), value: 'ri-meta-line' },
            { label: wp.i18n.__('Microsoft Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-microsoft-fill' },
            { label: wp.i18n.__('Microsoft Line', 'all-in-one-wp-sticky-anything'), value: 'ri-microsoft-line' },
            { label: wp.i18n.__('Microsoft Loop Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-microsoft-loop-fill' },
            { label: wp.i18n.__('Microsoft Loop Line', 'all-in-one-wp-sticky-anything'), value: 'ri-microsoft-loop-line' },
            { label: wp.i18n.__('Mixtral Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-mixtral-fill' },
            { label: wp.i18n.__('Mixtral Line', 'all-in-one-wp-sticky-anything'), value: 'ri-mixtral-line' },
            { label: wp.i18n.__('Netease Cloud Music Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-netease-cloud-music-fill' },
            { label: wp.i18n.__('Netease Cloud Music Line', 'all-in-one-wp-sticky-anything'), value: 'ri-netease-cloud-music-line' },
            { label: wp.i18n.__('Netflix Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-netflix-fill' },
            { label: wp.i18n.__('Netflix Line', 'all-in-one-wp-sticky-anything'), value: 'ri-netflix-line' },
            { label: wp.i18n.__('Next.js Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-nextjs-fill' },
            { label: wp.i18n.__('Next.js Line', 'all-in-one-wp-sticky-anything'), value: 'ri-nextjs-line' },
            { label: wp.i18n.__('Node.js Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-nodejs-fill' },
            { label: wp.i18n.__('Node.js Line', 'all-in-one-wp-sticky-anything'), value: 'ri-nodejs-line' },
            { label: wp.i18n.__('Notion Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-notion-fill' },
            { label: wp.i18n.__('Notion Line', 'all-in-one-wp-sticky-anything'), value: 'ri-notion-line' },
            { label: wp.i18n.__('NPM.js Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-npmjs-fill' },
            { label: wp.i18n.__('NPM.js Line', 'all-in-one-wp-sticky-anything'), value: 'ri-npmjs-line' },
            { label: wp.i18n.__('OpenAI Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-openai-fill' },
            { label: wp.i18n.__('OpenAI Line', 'all-in-one-wp-sticky-anything'), value: 'ri-openai-line' },
            { label: wp.i18n.__('Openbase Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-openbase-fill' },
            { label: wp.i18n.__('Openbase Line', 'all-in-one-wp-sticky-anything'), value: 'ri-openbase-line' },
            { label: wp.i18n.__('Opera Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-opera-fill' },
            { label: wp.i18n.__('Opera Line', 'all-in-one-wp-sticky-anything'), value: 'ri-opera-line' },
            { label: wp.i18n.__('Patreon Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-patreon-fill' },
            { label: wp.i18n.__('Patreon Line', 'all-in-one-wp-sticky-anything'), value: 'ri-patreon-line' },
            { label: wp.i18n.__('PayPal Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-paypal-fill' },
            { label: wp.i18n.__('PayPal Line', 'all-in-one-wp-sticky-anything'), value: 'ri-paypal-line' },
            { label: wp.i18n.__('Perplexity Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-perplexity-fill' },
            { label: wp.i18n.__('Perplexity Line', 'all-in-one-wp-sticky-anything'), value: 'ri-perplexity-line' },
            { label: wp.i18n.__('PHP Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-php-fill' },
            { label: wp.i18n.__('PHP Line', 'all-in-one-wp-sticky-anything'), value: 'ri-php-line' },
            { label: wp.i18n.__('Pinterest Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-pinterest-fill' },
            { label: wp.i18n.__('Pinterest Line', 'all-in-one-wp-sticky-anything'), value: 'ri-pinterest-line' },
            { label: wp.i18n.__('Pix Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-pix-fill' },
            { label: wp.i18n.__('Pix Line', 'all-in-one-wp-sticky-anything'), value: 'ri-pix-line' },
            { label: wp.i18n.__('Pixelfed Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-pixelfed-fill' },
            { label: wp.i18n.__('Pixelfed Line', 'all-in-one-wp-sticky-anything'), value: 'ri-pixelfed-line' },
            { label: wp.i18n.__('PlayStation Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-playstation-fill' },
            { label: wp.i18n.__('PlayStation Line', 'all-in-one-wp-sticky-anything'), value: 'ri-playstation-line' },
            { label: wp.i18n.__('Product Hunt Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-product-hunt-fill' },
            { label: wp.i18n.__('Product Hunt Line', 'all-in-one-wp-sticky-anything'), value: 'ri-product-hunt-line' },
            { label: wp.i18n.__('QQ Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-qq-fill' },
            { label: wp.i18n.__('QQ Line', 'all-in-one-wp-sticky-anything'), value: 'ri-qq-line' },
            { label: wp.i18n.__('ReactJS Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-reactjs-fill' },
            { label: wp.i18n.__('ReactJS Line', 'all-in-one-wp-sticky-anything'), value: 'ri-reactjs-line' },
            { label: wp.i18n.__('Reddit Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-reddit-fill' },
            { label: wp.i18n.__('Reddit Line', 'all-in-one-wp-sticky-anything'), value: 'ri-reddit-line' },
            { label: wp.i18n.__('Remixicon Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-remixicon-fill' },
            { label: wp.i18n.__('Remixicon Line', 'all-in-one-wp-sticky-anything'), value: 'ri-remixicon-line' },
            { label: wp.i18n.__('Remix Run Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-remix-run-fill' },
            { label: wp.i18n.__('Remix Run Line', 'all-in-one-wp-sticky-anything'), value: 'ri-remix-run-line' },
            { label: wp.i18n.__('Safari Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-safari-fill' },
            { label: wp.i18n.__('Safari Line', 'all-in-one-wp-sticky-anything'), value: 'ri-safari-line' },
            { label: wp.i18n.__('Skype Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-skype-fill' },
            { label: wp.i18n.__('Skype Line', 'all-in-one-wp-sticky-anything'), value: 'ri-skype-line' },
            { label: wp.i18n.__('Slack Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-slack-fill' },
            { label: wp.i18n.__('Slack Line', 'all-in-one-wp-sticky-anything'), value: 'ri-slack-line' },
            { label: wp.i18n.__('Snapchat Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-snapchat-fill' },
            { label: wp.i18n.__('Snapchat Line', 'all-in-one-wp-sticky-anything'), value: 'ri-snapchat-line' },
            { label: wp.i18n.__('SoundCloud Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-soundcloud-fill' },
            { label: wp.i18n.__('SoundCloud Line', 'all-in-one-wp-sticky-anything'), value: 'ri-soundcloud-line' },
            { label: wp.i18n.__('Spotify Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-spotify-fill' },
            { label: wp.i18n.__('Spotify Line', 'all-in-one-wp-sticky-anything'), value: 'ri-spotify-line' },
            { label: wp.i18n.__('Stack Overflow Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-stack-overflow-fill' },
            { label: wp.i18n.__('Stack Overflow Line', 'all-in-one-wp-sticky-anything'), value: 'ri-stack-overflow-line' },
            { label: wp.i18n.__('Stackshare Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-stackshare-fill' },
            { label: wp.i18n.__('Stackshare Line', 'all-in-one-wp-sticky-anything'), value: 'ri-stackshare-line' },
            { label: wp.i18n.__('Steam Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-steam-fill' },
            { label: wp.i18n.__('Steam Line', 'all-in-one-wp-sticky-anything'), value: 'ri-steam-line' },
            { label: wp.i18n.__('Supabase Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-supabase-fill' },
            { label: wp.i18n.__('Supabase Line', 'all-in-one-wp-sticky-anything'), value: 'ri-supabase-line' },
            { label: wp.i18n.__('Svelte Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-svelte-fill' },
            { label: wp.i18n.__('Svelte Line', 'all-in-one-wp-sticky-anything'), value: 'ri-svelte-line' },
            { label: wp.i18n.__('Tailwind CSS Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-tailwind-css-fill' },
            { label: wp.i18n.__('Tailwind CSS Line', 'all-in-one-wp-sticky-anything'), value: 'ri-tailwind-css-line' },
            { label: wp.i18n.__('Taobao Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-taobao-fill' },
            { label: wp.i18n.__('Taobao Line', 'all-in-one-wp-sticky-anything'), value: 'ri-taobao-line' },
            { label: wp.i18n.__('Telegram Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-telegram-fill' },
            { label: wp.i18n.__('Telegram Line', 'all-in-one-wp-sticky-anything'), value: 'ri-telegram-line' },
            { label: wp.i18n.__('Telegram 2 Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-telegram-2-fill' },
            { label: wp.i18n.__('Telegram 2 Line', 'all-in-one-wp-sticky-anything'), value: 'ri-telegram-2-line' },
            { label: wp.i18n.__('Threads Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-threads-fill' },
            { label: wp.i18n.__('Threads Line', 'all-in-one-wp-sticky-anything'), value: 'ri-threads-line' },
            { label: wp.i18n.__('TikTok Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-tiktok-fill' },
            { label: wp.i18n.__('TikTok Line', 'all-in-one-wp-sticky-anything'), value: 'ri-tiktok-line' },
            { label: wp.i18n.__('Trello Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-trello-fill' },
            { label: wp.i18n.__('Trello Line', 'all-in-one-wp-sticky-anything'), value: 'ri-trello-line' },
            { label: wp.i18n.__('Tumblr Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-tumblr-fill' },
            { label: wp.i18n.__('Tumblr Line', 'all-in-one-wp-sticky-anything'), value: 'ri-tumblr-line' },
            { label: wp.i18n.__('Twitch Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-twitch-fill' },
            { label: wp.i18n.__('Twitch Line', 'all-in-one-wp-sticky-anything'), value: 'ri-twitch-line' },
            { label: wp.i18n.__('Twitter Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-twitter-fill' },
            { label: wp.i18n.__('Twitter Line', 'all-in-one-wp-sticky-anything'), value: 'ri-twitter-line' },
            { label: wp.i18n.__('Twitter X Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-twitter-x-fill' },
            { label: wp.i18n.__('Twitter X Line', 'all-in-one-wp-sticky-anything'), value: 'ri-twitter-x-line' },
            { label: wp.i18n.__('Ubuntu Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-ubuntu-fill' },
            { label: wp.i18n.__('Ubuntu Line', 'all-in-one-wp-sticky-anything'), value: 'ri-ubuntu-line' },
            { label: wp.i18n.__('Unsplash Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-unsplash-fill' },
            { label: wp.i18n.__('Unsplash Line', 'all-in-one-wp-sticky-anything'), value: 'ri-unsplash-line' },
            { label: wp.i18n.__('Vercel Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-vercel-fill' },
            { label: wp.i18n.__('Vercel Line', 'all-in-one-wp-sticky-anything'), value: 'ri-vercel-line' },
            { label: wp.i18n.__('Vimeo Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-vimeo-fill' },
            { label: wp.i18n.__('Vimeo Line', 'all-in-one-wp-sticky-anything'), value: 'ri-vimeo-line' },
            { label: wp.i18n.__('Visa Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-visa-fill' },
            { label: wp.i18n.__('Visa Line', 'all-in-one-wp-sticky-anything'), value: 'ri-visa-line' },
            { label: wp.i18n.__('VK Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-vk-fill' },
            { label: wp.i18n.__('VK Line', 'all-in-one-wp-sticky-anything'), value: 'ri-vk-line' },
            { label: wp.i18n.__('VueJS Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-vuejs-fill' },
            { label: wp.i18n.__('VueJS Line', 'all-in-one-wp-sticky-anything'), value: 'ri-vuejs-line' },
            { label: wp.i18n.__('WeChat Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-wechat-fill' },
            { label: wp.i18n.__('WeChat Line', 'all-in-one-wp-sticky-anything'), value: 'ri-wechat-line' },
            { label: wp.i18n.__('WeChat 2 Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-wechat-2-fill' },
            { label: wp.i18n.__('WeChat 2 Line', 'all-in-one-wp-sticky-anything'), value: 'ri-wechat-2-line' },
            { label: wp.i18n.__('WeChat Channels Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-wechat-channels-fill' },
            { label: wp.i18n.__('WeChat Channels Line', 'all-in-one-wp-sticky-anything'), value: 'ri-wechat-channels-line' },
            { label: wp.i18n.__('WeChat Pay Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-wechat-pay-fill' },
            { label: wp.i18n.__('WeChat Pay Line', 'all-in-one-wp-sticky-anything'), value: 'ri-wechat-pay-line' },
            { label: wp.i18n.__('Weibo Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-weibo-fill' },
            { label: wp.i18n.__('Weibo Line', 'all-in-one-wp-sticky-anything'), value: 'ri-weibo-line' },
            { label: wp.i18n.__('WhatsApp Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-whatsapp-fill' },
            { label: wp.i18n.__('WhatsApp Line', 'all-in-one-wp-sticky-anything'), value: 'ri-whatsapp-line' },
            { label: wp.i18n.__('Windows Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-windows-fill' },
            { label: wp.i18n.__('Windows Line', 'all-in-one-wp-sticky-anything'), value: 'ri-windows-line' },
            { label: wp.i18n.__('WordPress Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-wordpress-fill' },
            { label: wp.i18n.__('WordPress Line', 'all-in-one-wp-sticky-anything'), value: 'ri-wordpress-line' },
            { label: wp.i18n.__('Xbox Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-xbox-fill' },
            { label: wp.i18n.__('Xbox Line', 'all-in-one-wp-sticky-anything'), value: 'ri-xbox-line' },
            { label: wp.i18n.__('Xing Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-xing-fill' },
            { label: wp.i18n.__('Xing Line', 'all-in-one-wp-sticky-anything'), value: 'ri-xing-line' },
            { label: wp.i18n.__('XRP Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-xrp-fill' },
            { label: wp.i18n.__('XRP Line', 'all-in-one-wp-sticky-anything'), value: 'ri-xrp-line' },
            { label: wp.i18n.__('XTZ Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-xtz-fill' },
            { label: wp.i18n.__('XTZ Line', 'all-in-one-wp-sticky-anything'), value: 'ri-xtz-line' },
            { label: wp.i18n.__('YouTube Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-youtube-fill' },
            { label: wp.i18n.__('YouTube Line', 'all-in-one-wp-sticky-anything'), value: 'ri-youtube-line' },
            { label: wp.i18n.__('Yuque Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-yuque-fill' },
            { label: wp.i18n.__('Yuque Line', 'all-in-one-wp-sticky-anything'), value: 'ri-yuque-line' },
            { label: wp.i18n.__('Zcool Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-zcool-fill' },
            { label: wp.i18n.__('Zcool Line', 'all-in-one-wp-sticky-anything'), value: 'ri-zcool-line' },
            { label: wp.i18n.__('Zhihu Fill', 'all-in-one-wp-sticky-anything'), value: 'ri-zhihu-fill' },
            { label: wp.i18n.__('Zhihu Line', 'all-in-one-wp-sticky-anything'), value: 'ri-zhihu-line' }
        ],
        lineicon: [
            { label: wp.i18n.__('Select Icon', 'all-in-one-wp-sticky-anything'), value: '' },
            { label: wp.i18n.__('500px', 'all-in-one-wp-sticky-anything'), value: 'lni-500px' },
            { label: wp.i18n.__('Adobe', 'all-in-one-wp-sticky-anything'), value: 'lni-adobe' },
            { label: wp.i18n.__('Adonis', 'all-in-one-wp-sticky-anything'), value: 'lni-adonis' },
            { label: wp.i18n.__('Airbnb', 'all-in-one-wp-sticky-anything'), value: 'lni-airbnb' },
            { label: wp.i18n.__('Airtable', 'all-in-one-wp-sticky-anything'), value: 'lni-airtable' },
            { label: wp.i18n.__('Alpinejs', 'all-in-one-wp-sticky-anything'), value: 'lni-alpinejs' },
            { label: wp.i18n.__('Amazon', 'all-in-one-wp-sticky-anything'), value: 'lni-amazon' },
            { label: wp.i18n.__('Amazon Original', 'all-in-one-wp-sticky-anything'), value: 'lni-amazon-original' },
            { label: wp.i18n.__('Amazon Pay', 'all-in-one-wp-sticky-anything'), value: 'lni-amazon-pay' },
            { label: wp.i18n.__('AMD', 'all-in-one-wp-sticky-anything'), value: 'lni-amd' },
            { label: wp.i18n.__('Amex', 'all-in-one-wp-sticky-anything'), value: 'lni-amex' },
            { label: wp.i18n.__('Android', 'all-in-one-wp-sticky-anything'), value: 'lni-android' },
            { label: wp.i18n.__('Android Old', 'all-in-one-wp-sticky-anything'), value: 'lni-android-old' },
            { label: wp.i18n.__('Angellist', 'all-in-one-wp-sticky-anything'), value: 'lni-angellist' },
            { label: wp.i18n.__('Angular', 'all-in-one-wp-sticky-anything'), value: 'lni-angular' },
            { label: wp.i18n.__('App Store', 'all-in-one-wp-sticky-anything'), value: 'lni-app-store' },
            { label: wp.i18n.__('Apple Brand', 'all-in-one-wp-sticky-anything'), value: 'lni-apple-brand' },
            { label: wp.i18n.__('Apple Music', 'all-in-one-wp-sticky-anything'), value: 'lni-apple-music' },
            { label: wp.i18n.__('Apple Music Alt', 'all-in-one-wp-sticky-anything'), value: 'lni-apple-music-alt' },
            { label: wp.i18n.__('Apple Pay', 'all-in-one-wp-sticky-anything'), value: 'lni-apple-pay' },
            { label: wp.i18n.__('Arc Browser', 'all-in-one-wp-sticky-anything'), value: 'lni-arc-browser' },
            { label: wp.i18n.__('Asana', 'all-in-one-wp-sticky-anything'), value: 'lni-asana' },
            { label: wp.i18n.__('Astro', 'all-in-one-wp-sticky-anything'), value: 'lni-astro' },
            { label: wp.i18n.__('Atlassian', 'all-in-one-wp-sticky-anything'), value: 'lni-atlassian' },
            { label: wp.i18n.__('Audi', 'all-in-one-wp-sticky-anything'), value: 'lni-audi' },
            { label: wp.i18n.__('Audi Alt', 'all-in-one-wp-sticky-anything'), value: 'lni-audi-alt' },
            { label: wp.i18n.__('AWS', 'all-in-one-wp-sticky-anything'), value: 'lni-aws' },
            { label: wp.i18n.__('Azure', 'all-in-one-wp-sticky-anything'), value: 'lni-azure' },
            { label: wp.i18n.__('Behance', 'all-in-one-wp-sticky-anything'), value: 'lni-behance' },
            { label: wp.i18n.__('Bing', 'all-in-one-wp-sticky-anything'), value: 'lni-bing' },
            { label: wp.i18n.__('Bitbucket', 'all-in-one-wp-sticky-anything'), value: 'lni-bitbucket' },
            { label: wp.i18n.__('Bitcoin', 'all-in-one-wp-sticky-anything'), value: 'lni-bitcoin' },
            { label: wp.i18n.__('Bittorrent', 'all-in-one-wp-sticky-anything'), value: 'lni-bittorrent' },
            { label: wp.i18n.__('Blogger', 'all-in-one-wp-sticky-anything'), value: 'lni-blogger' },
            { label: wp.i18n.__('Blogger Alt', 'all-in-one-wp-sticky-anything'), value: 'lni-blogger-alt' },
            { label: wp.i18n.__('Bluetooth', 'all-in-one-wp-sticky-anything'), value: 'lni-bluetooth' },
            { label: wp.i18n.__('Bluetooth Logo', 'all-in-one-wp-sticky-anything'), value: 'lni-bluetooth-logo' },
            { label: wp.i18n.__('BMW', 'all-in-one-wp-sticky-anything'), value: 'lni-bmw' },
            { label: wp.i18n.__('Bootstrap 5', 'all-in-one-wp-sticky-anything'), value: 'lni-bootstrap-5' },
            { label: wp.i18n.__('Bootstrap 5 Square', 'all-in-one-wp-sticky-anything'), value: 'lni-bootstrap-5-square' },
            { label: wp.i18n.__('Brave', 'all-in-one-wp-sticky-anything'), value: 'lni-brave' },
            { label: wp.i18n.__('BTC', 'all-in-one-wp-sticky-anything'), value: 'lni-btc' },
            { label: wp.i18n.__('Canva', 'all-in-one-wp-sticky-anything'), value: 'lni-canva' },
            { label: wp.i18n.__('Cash App', 'all-in-one-wp-sticky-anything'), value: 'lni-cash-app' },
            { label: wp.i18n.__('Chrome', 'all-in-one-wp-sticky-anything'), value: 'lni-chrome' },
            { label: wp.i18n.__('Chromecast', 'all-in-one-wp-sticky-anything'), value: 'lni-chromecast' },
            { label: wp.i18n.__('Cisco', 'all-in-one-wp-sticky-anything'), value: 'lni-cisco' },
            { label: wp.i18n.__('Claude', 'all-in-one-wp-sticky-anything'), value: 'lni-claude' },
            { label: wp.i18n.__('Clickup', 'all-in-one-wp-sticky-anything'), value: 'lni-clickup' },
            { label: wp.i18n.__('Cloudflare', 'all-in-one-wp-sticky-anything'), value: 'lni-cloudflare' },
            { label: wp.i18n.__('Codepen', 'all-in-one-wp-sticky-anything'), value: 'lni-codepen' },
            { label: wp.i18n.__('Coinbase', 'all-in-one-wp-sticky-anything'), value: 'lni-coinbase' },
            { label: wp.i18n.__('Connectdevelop', 'all-in-one-wp-sticky-anything'), value: 'lni-connectdevelop' },
            { label: wp.i18n.__('Copilot', 'all-in-one-wp-sticky-anything'), value: 'lni-copilot' },
            { label: wp.i18n.__('Coral', 'all-in-one-wp-sticky-anything'), value: 'lni-coral' },
            { label: wp.i18n.__('Cpanel', 'all-in-one-wp-sticky-anything'), value: 'lni-cpanel' },
            { label: wp.i18n.__('Creative Commons', 'all-in-one-wp-sticky-anything'), value: 'lni-creative-commons' },
            { label: wp.i18n.__('CSS3', 'all-in-one-wp-sticky-anything'), value: 'lni-css3' },
            { label: wp.i18n.__('Deno', 'all-in-one-wp-sticky-anything'), value: 'lni-deno' },
            { label: wp.i18n.__('Dev', 'all-in-one-wp-sticky-anything'), value: 'lni-dev' },
            { label: wp.i18n.__('Dialogflow', 'all-in-one-wp-sticky-anything'), value: 'lni-dialogflow' },
            { label: wp.i18n.__('Digitalocean', 'all-in-one-wp-sticky-anything'), value: 'lni-digitalocean' },
            { label: wp.i18n.__('Diners Club', 'all-in-one-wp-sticky-anything'), value: 'lni-diners-club' },
            { label: wp.i18n.__('Discord', 'all-in-one-wp-sticky-anything'), value: 'lni-discord' },
            { label: wp.i18n.__('Discord Chat', 'all-in-one-wp-sticky-anything'), value: 'lni-discord-chat' },
            { label: wp.i18n.__('Discover', 'all-in-one-wp-sticky-anything'), value: 'lni-discover' },
            { label: wp.i18n.__('Docker', 'all-in-one-wp-sticky-anything'), value: 'lni-docker' },
            { label: wp.i18n.__('Dribbble', 'all-in-one-wp-sticky-anything'), value: 'lni-dribbble' },
            { label: wp.i18n.__('Dribbble Symbol', 'all-in-one-wp-sticky-anything'), value: 'lni-dribbble-symbol' },
            { label: wp.i18n.__('Drizzle', 'all-in-one-wp-sticky-anything'), value: 'lni-drizzle' },
            { label: wp.i18n.__('Dropbox', 'all-in-one-wp-sticky-anything'), value: 'lni-dropbox' },
            { label: wp.i18n.__('Drupal', 'all-in-one-wp-sticky-anything'), value: 'lni-drupal' },
            { label: wp.i18n.__('Edge', 'all-in-one-wp-sticky-anything'), value: 'lni-edge' },
            { label: wp.i18n.__('Envato', 'all-in-one-wp-sticky-anything'), value: 'lni-envato' },
            { label: wp.i18n.__('Ethereum Logo', 'all-in-one-wp-sticky-anything'), value: 'lni-ethereum-logo' },
            { label: wp.i18n.__('Expressjs', 'all-in-one-wp-sticky-anything'), value: 'lni-expressjs' },
            { label: wp.i18n.__('Facebook', 'all-in-one-wp-sticky-anything'), value: 'lni-facebook' },
            { label: wp.i18n.__('Facebook Messenger', 'all-in-one-wp-sticky-anything'), value: 'lni-facebook-messenger' },
            { label: wp.i18n.__('Facebook Rounded', 'all-in-one-wp-sticky-anything'), value: 'lni-facebook-rounded' },
            { label: wp.i18n.__('Facebook Square', 'all-in-one-wp-sticky-anything'), value: 'lni-facebook-square' },
            { label: wp.i18n.__('Facetime', 'all-in-one-wp-sticky-anything'), value: 'lni-facetime' },
            { label: wp.i18n.__('Figma', 'all-in-one-wp-sticky-anything'), value: 'lni-figma' },
            { label: wp.i18n.__('Firebase', 'all-in-one-wp-sticky-anything'), value: 'lni-firebase' },
            { label: wp.i18n.__('Firefox', 'all-in-one-wp-sticky-anything'), value: 'lni-firefox' },
            { label: wp.i18n.__('Fitbit', 'all-in-one-wp-sticky-anything'), value: 'lni-fitbit' },
            { label: wp.i18n.__('Flickr', 'all-in-one-wp-sticky-anything'), value: 'lni-flickr' },
            { label: wp.i18n.__('Flutter', 'all-in-one-wp-sticky-anything'), value: 'lni-flutter' },
            { label: wp.i18n.__('Ford', 'all-in-one-wp-sticky-anything'), value: 'lni-ford' },
            { label: wp.i18n.__('Framer', 'all-in-one-wp-sticky-anything'), value: 'lni-framer' },
            { label: wp.i18n.__('Gatsby', 'all-in-one-wp-sticky-anything'), value: 'lni-gatsby' },
            { label: wp.i18n.__('Gemini', 'all-in-one-wp-sticky-anything'), value: 'lni-gemini' },
            { label: wp.i18n.__('Git', 'all-in-one-wp-sticky-anything'), value: 'lni-git' },
            { label: wp.i18n.__('Github', 'all-in-one-wp-sticky-anything'), value: 'lni-github' },
            { label: wp.i18n.__('Go', 'all-in-one-wp-sticky-anything'), value: 'lni-go' },
            { label: wp.i18n.__('Goodreads', 'all-in-one-wp-sticky-anything'), value: 'lni-goodreads' },
            { label: wp.i18n.__('Google', 'all-in-one-wp-sticky-anything'), value: 'lni-google' },
            { label: wp.i18n.__('Google Cloud', 'all-in-one-wp-sticky-anything'), value: 'lni-google-cloud' },
            { label: wp.i18n.__('Google Drive', 'all-in-one-wp-sticky-anything'), value: 'lni-google-drive' },
            { label: wp.i18n.__('Google Meet', 'all-in-one-wp-sticky-anything'), value: 'lni-google-meet' },
            { label: wp.i18n.__('Google Pay', 'all-in-one-wp-sticky-anything'), value: 'lni-google-pay' },
            { label: wp.i18n.__('Google Wallet', 'all-in-one-wp-sticky-anything'), value: 'lni-google-wallet' },
            { label: wp.i18n.__('Grammarly', 'all-in-one-wp-sticky-anything'), value: 'lni-grammarly' },
            { label: wp.i18n.__('Hacker News', 'all-in-one-wp-sticky-anything'), value: 'lni-hacker-news' },
            { label: wp.i18n.__('Hashnode', 'all-in-one-wp-sticky-anything'), value: 'lni-hashnode' },
            { label: wp.i18n.__('HTML5', 'all-in-one-wp-sticky-anything'), value: 'lni-html5' },
            { label: wp.i18n.__('IBM', 'all-in-one-wp-sticky-anything'), value: 'lni-ibm' },
            { label: wp.i18n.__('IMDB', 'all-in-one-wp-sticky-anything'), value: 'lni-imdb' },
            { label: wp.i18n.__('Instagram', 'all-in-one-wp-sticky-anything'), value: 'lni-instagram' },
            { label: wp.i18n.__('Instagram Logotype', 'all-in-one-wp-sticky-anything'), value: 'lni-instagram-logotype' },
            { label: wp.i18n.__('Intel', 'all-in-one-wp-sticky-anything'), value: 'lni-intel' },
            { label: wp.i18n.__('iOS', 'all-in-one-wp-sticky-anything'), value: 'lni-ios' },
            { label: wp.i18n.__('Jaguar', 'all-in-one-wp-sticky-anything'), value: 'lni-jaguar' },
            { label: wp.i18n.__('Jamstack', 'all-in-one-wp-sticky-anything'), value: 'lni-jamstack' },
            { label: wp.i18n.__('Java', 'all-in-one-wp-sticky-anything'), value: 'lni-java' },
            { label: wp.i18n.__('Javascript', 'all-in-one-wp-sticky-anything'), value: 'lni-javascript' },
            { label: wp.i18n.__('JCB', 'all-in-one-wp-sticky-anything'), value: 'lni-jcb' },
            { label: wp.i18n.__('Joomla', 'all-in-one-wp-sticky-anything'), value: 'lni-joomla' },
            { label: wp.i18n.__('JSFiddle', 'all-in-one-wp-sticky-anything'), value: 'lni-jsfiddle' },
            { label: wp.i18n.__('Kubernetes', 'all-in-one-wp-sticky-anything'), value: 'lni-kubernetes' },
            { label: wp.i18n.__('Laravel', 'all-in-one-wp-sticky-anything'), value: 'lni-laravel' },
            { label: wp.i18n.__('Lemon Squeezy', 'all-in-one-wp-sticky-anything'), value: 'lni-lemon-squeezy' },
            { label: wp.i18n.__('Line', 'all-in-one-wp-sticky-anything'), value: 'lni-line' },
            { label: wp.i18n.__('Lineicons', 'all-in-one-wp-sticky-anything'), value: 'lni-lineicons' },
            { label: wp.i18n.__('LinkedIn', 'all-in-one-wp-sticky-anything'), value: 'lni-linkedin' },
            { label: wp.i18n.__('Loom', 'all-in-one-wp-sticky-anything'), value: 'lni-loom' },
            { label: wp.i18n.__('Magento', 'all-in-one-wp-sticky-anything'), value: 'lni-magento' },
            { label: wp.i18n.__('Mailchimp', 'all-in-one-wp-sticky-anything'), value: 'lni-mailchimp' },
            { label: wp.i18n.__('Markdown', 'all-in-one-wp-sticky-anything'), value: 'lni-markdown' },
            { label: wp.i18n.__('Mastercard', 'all-in-one-wp-sticky-anything'), value: 'lni-mastercard' },
            { label: wp.i18n.__('Medium', 'all-in-one-wp-sticky-anything'), value: 'lni-medium' },
            { label: wp.i18n.__('Medium Alt', 'all-in-one-wp-sticky-anything'), value: 'lni-medium-alt' },
            { label: wp.i18n.__('Mercedes', 'all-in-one-wp-sticky-anything'), value: 'lni-mercedes' },
            { label: wp.i18n.__('Meta', 'all-in-one-wp-sticky-anything'), value: 'lni-meta' },
            { label: wp.i18n.__('Meta Alt', 'all-in-one-wp-sticky-anything'), value: 'lni-meta-alt' },
            { label: wp.i18n.__('Microsoft', 'all-in-one-wp-sticky-anything'), value: 'lni-microsoft' },
            { label: wp.i18n.__('Microsoft Edge', 'all-in-one-wp-sticky-anything'), value: 'lni-microsoft-edge' },
            { label: wp.i18n.__('Microsoft Teams', 'all-in-one-wp-sticky-anything'), value: 'lni-microsoft-teams' },
            { label: wp.i18n.__('MongoDB', 'all-in-one-wp-sticky-anything'), value: 'lni-mongodb' },
            { label: wp.i18n.__('MySQL', 'all-in-one-wp-sticky-anything'), value: 'lni-mysql' },
            { label: wp.i18n.__('NASA', 'all-in-one-wp-sticky-anything'), value: 'lni-nasa' },
            { label: wp.i18n.__('Netflix', 'all-in-one-wp-sticky-anything'), value: 'lni-netflix' },
            { label: wp.i18n.__('Netlify', 'all-in-one-wp-sticky-anything'), value: 'lni-netlify' },
            { label: wp.i18n.__('Nextjs', 'all-in-one-wp-sticky-anything'), value: 'lni-nextjs' },
            { label: wp.i18n.__('Nike', 'all-in-one-wp-sticky-anything'), value: 'lni-nike' },
            { label: wp.i18n.__('Nissan', 'all-in-one-wp-sticky-anything'), value: 'lni-nissan' },
            { label: wp.i18n.__('Nodejs', 'all-in-one-wp-sticky-anything'), value: 'lni-nodejs' },
            { label: wp.i18n.__('Nodejs Alt', 'all-in-one-wp-sticky-anything'), value: 'lni-nodejs-alt' },
            { label: wp.i18n.__('Notion', 'all-in-one-wp-sticky-anything'), value: 'lni-notion' },
            { label: wp.i18n.__('NPM', 'all-in-one-wp-sticky-anything'), value: 'lni-npm' },
            { label: wp.i18n.__('Nuxt', 'all-in-one-wp-sticky-anything'), value: 'lni-nuxt' },
            { label: wp.i18n.__('Nvidia', 'all-in-one-wp-sticky-anything'), value: 'lni-nvidia' },
            { label: wp.i18n.__('Oculus', 'all-in-one-wp-sticky-anything'), value: 'lni-oculus' },
            { label: wp.i18n.__('OpenAI', 'all-in-one-wp-sticky-anything'), value: 'lni-open-ai' },
            { label: wp.i18n.__('Opera Mini', 'all-in-one-wp-sticky-anything'), value: 'lni-opera-mini' },
            { label: wp.i18n.__('Oracle', 'all-in-one-wp-sticky-anything'), value: 'lni-oracle' },
            { label: wp.i18n.__('Paddle', 'all-in-one-wp-sticky-anything'), value: 'lni-paddle' },
            { label: wp.i18n.__('Patreon', 'all-in-one-wp-sticky-anything'), value: 'lni-patreon' },
            { label: wp.i18n.__('Payoneer', 'all-in-one-wp-sticky-anything'), value: 'lni-payoneer' },
            { label: wp.i18n.__('PayPal', 'all-in-one-wp-sticky-anything'), value: 'lni-paypal' },
            { label: wp.i18n.__('Pepsi', 'all-in-one-wp-sticky-anything'), value: 'lni-pepsi' },
            { label: wp.i18n.__('PHP', 'all-in-one-wp-sticky-anything'), value: 'lni-php' },
            { label: wp.i18n.__('Pimjo Logo', 'all-in-one-wp-sticky-anything'), value: 'lni-pimjo-logo' },
            { label: wp.i18n.__('Pimjo Symbol', 'all-in-one-wp-sticky-anything'), value: 'lni-pimjo-symbol' },
            { label: wp.i18n.__('Pinterest', 'all-in-one-wp-sticky-anything'), value: 'lni-pinterest' },
            { label: wp.i18n.__('Plantscale', 'all-in-one-wp-sticky-anything'), value: 'lni-plantscale' },
            { label: wp.i18n.__('Play Store', 'all-in-one-wp-sticky-anything'), value: 'lni-play-store' },
            { label: wp.i18n.__('Playstation', 'all-in-one-wp-sticky-anything'), value: 'lni-playstation' },
            { label: wp.i18n.__('PNPM', 'all-in-one-wp-sticky-anything'), value: 'lni-pnpm' },
            { label: wp.i18n.__('PostgreSQL', 'all-in-one-wp-sticky-anything'), value: 'lni-postgresql' },
            { label: wp.i18n.__('Postman', 'all-in-one-wp-sticky-anything'), value: 'lni-postman' },
            { label: wp.i18n.__('Prisma', 'all-in-one-wp-sticky-anything'), value: 'lni-prisma' },
            { label: wp.i18n.__('Producthunt', 'all-in-one-wp-sticky-anything'), value: 'lni-producthunt' },
            { label: wp.i18n.__('Proton Mail Logo', 'all-in-one-wp-sticky-anything'), value: 'lni-proton-mail-logo' },
            { label: wp.i18n.__('Proton Mail Symbol', 'all-in-one-wp-sticky-anything'), value: 'lni-proton-mail-symbol' },
            { label: wp.i18n.__('Python', 'all-in-one-wp-sticky-anything'), value: 'lni-python' },
            { label: wp.i18n.__('Quora', 'all-in-one-wp-sticky-anything'), value: 'lni-quora' },
            { label: wp.i18n.__('Radis', 'all-in-one-wp-sticky-anything'), value: 'lni-radis' },
            { label: wp.i18n.__('React', 'all-in-one-wp-sticky-anything'), value: 'lni-react' },
            { label: wp.i18n.__('Reddit', 'all-in-one-wp-sticky-anything'), value: 'lni-reddit' },
            { label: wp.i18n.__('Remix JS', 'all-in-one-wp-sticky-anything'), value: 'lni-remix-js' },
            { label: wp.i18n.__('Safari', 'all-in-one-wp-sticky-anything'), value: 'lni-safari' },
            { label: wp.i18n.__('Sanity', 'all-in-one-wp-sticky-anything'), value: 'lni-sanity' },
            { label: wp.i18n.__('Signal App', 'all-in-one-wp-sticky-anything'), value: 'lni-signal-app' },
            { label: wp.i18n.__('Sketch', 'all-in-one-wp-sticky-anything'), value: 'lni-sketch' },
            { label: wp.i18n.__('Skype', 'all-in-one-wp-sticky-anything'), value: 'lni-skype' },
            { label: wp.i18n.__('Slack', 'all-in-one-wp-sticky-anything'), value: 'lni-slack' },
            { label: wp.i18n.__('Slideshare', 'all-in-one-wp-sticky-anything'), value: 'lni-slideshare' },
            { label: wp.i18n.__('Snapchat', 'all-in-one-wp-sticky-anything'), value: 'lni-snapchat' },
            { label: wp.i18n.__('Soundcloud', 'all-in-one-wp-sticky-anything'), value: 'lni-soundcloud' },
            { label: wp.i18n.__('SpaceX', 'all-in-one-wp-sticky-anything'), value: 'lni-spacex' },
            { label: wp.i18n.__('Spotify', 'all-in-one-wp-sticky-anything'), value: 'lni-spotify' },
            { label: wp.i18n.__('Spotify Alt', 'all-in-one-wp-sticky-anything'), value: 'lni-spotify-alt' },
            { label: wp.i18n.__('Squarespace', 'all-in-one-wp-sticky-anything'), value: 'lni-squarespace' },
            { label: wp.i18n.__('Stackoverflow', 'all-in-one-wp-sticky-anything'), value: 'lni-stackoverflow' },
            { label: wp.i18n.__('Statista', 'all-in-one-wp-sticky-anything'), value: 'lni-statista' },
            { label: wp.i18n.__('Steam', 'all-in-one-wp-sticky-anything'), value: 'lni-steam' },
            { label: wp.i18n.__('Stripe', 'all-in-one-wp-sticky-anything'), value: 'lni-stripe' },
            { label: wp.i18n.__('Stumbleupon', 'all-in-one-wp-sticky-anything'), value: 'lni-stumbleupon' },
            { label: wp.i18n.__('Supabase', 'all-in-one-wp-sticky-anything'), value: 'lni-supabase' },
            { label: wp.i18n.__('Svelte', 'all-in-one-wp-sticky-anything'), value: 'lni-svelte' },
            { label: wp.i18n.__('Swift', 'all-in-one-wp-sticky-anything'), value: 'lni-swift' },
            { label: wp.i18n.__('Tailwindcss', 'all-in-one-wp-sticky-anything'), value: 'lni-tailwindcss' },
            { label: wp.i18n.__('Telegram', 'all-in-one-wp-sticky-anything'), value: 'lni-telegram' },
            { label: wp.i18n.__('Tesla', 'all-in-one-wp-sticky-anything'), value: 'lni-tesla' },
            { label: wp.i18n.__('TikTok', 'all-in-one-wp-sticky-anything'), value: 'lni-tiktok' },
            { label: wp.i18n.__('TikTok Alt', 'all-in-one-wp-sticky-anything'), value: 'lni-tiktok-alt' },
            { label: wp.i18n.__('Toyota', 'all-in-one-wp-sticky-anything'), value: 'lni-toyota' },
            { label: wp.i18n.__('Trello', 'all-in-one-wp-sticky-anything'), value: 'lni-trello' },
            { label: wp.i18n.__('Tumblr', 'all-in-one-wp-sticky-anything'), value: 'lni-tumblr' },
            { label: wp.i18n.__('Turborepo', 'all-in-one-wp-sticky-anything'), value: 'lni-turborepo' },
            { label: wp.i18n.__('Twitch', 'all-in-one-wp-sticky-anything'), value: 'lni-twitch' },
            { label: wp.i18n.__('Twitter Old', 'all-in-one-wp-sticky-anything'), value: 'lni-twitter-old' },
            { label: wp.i18n.__('Typescript', 'all-in-one-wp-sticky-anything'), value: 'lni-typescript' },
            { label: wp.i18n.__('Uber', 'all-in-one-wp-sticky-anything'), value: 'lni-uber' },
            { label: wp.i18n.__('Uber Symbol', 'all-in-one-wp-sticky-anything'), value: 'lni-uber-symbol' },
            { label: wp.i18n.__('Ubuntu', 'all-in-one-wp-sticky-anything'), value: 'lni-ubuntu' },
            { label: wp.i18n.__('Unsplash', 'all-in-one-wp-sticky-anything'), value: 'lni-unsplash' },
            { label: wp.i18n.__('Vercel', 'all-in-one-wp-sticky-anything'), value: 'lni-vercel' },
            { label: wp.i18n.__('Vimeo', 'all-in-one-wp-sticky-anything'), value: 'lni-vimeo' },
            { label: wp.i18n.__('Visa', 'all-in-one-wp-sticky-anything'), value: 'lni-visa' },
            { label: wp.i18n.__('Vite', 'all-in-one-wp-sticky-anything'), value: 'lni-vite' },
            { label: wp.i18n.__('VK', 'all-in-one-wp-sticky-anything'), value: 'lni-vk' },
            { label: wp.i18n.__('VMware', 'all-in-one-wp-sticky-anything'), value: 'lni-vmware' },
            { label: wp.i18n.__('Volkswagen', 'all-in-one-wp-sticky-anything'), value: 'lni-volkswagen' },
            { label: wp.i18n.__('VS Code', 'all-in-one-wp-sticky-anything'), value: 'lni-vs-code' },
            { label: wp.i18n.__('Vuejs', 'all-in-one-wp-sticky-anything'), value: 'lni-vuejs' },
            { label: wp.i18n.__('Webflow', 'all-in-one-wp-sticky-anything'), value: 'lni-webflow' },
            { label: wp.i18n.__('Webhooks', 'all-in-one-wp-sticky-anything'), value: 'lni-webhooks' },
            { label: wp.i18n.__('WeChat', 'all-in-one-wp-sticky-anything'), value: 'lni-wechat' },
            { label: wp.i18n.__('WhatsApp', 'all-in-one-wp-sticky-anything'), value: 'lni-whatsapp' },
            { label: wp.i18n.__('Windows', 'all-in-one-wp-sticky-anything'), value: 'lni-windows' },
            { label: wp.i18n.__('Wise', 'all-in-one-wp-sticky-anything'), value: 'lni-wise' },
            { label: wp.i18n.__('WordPress', 'all-in-one-wp-sticky-anything'), value: 'lni-wordpress' },
            { label: wp.i18n.__('X', 'all-in-one-wp-sticky-anything'), value: 'lni-x' },
            { label: wp.i18n.__('XAMPP', 'all-in-one-wp-sticky-anything'), value: 'lni-xampp' },
            { label: wp.i18n.__('Xbox', 'all-in-one-wp-sticky-anything'), value: 'lni-xbox' },
            { label: wp.i18n.__('XRP', 'all-in-one-wp-sticky-anything'), value: 'lni-xrp' },
            { label: wp.i18n.__('Yahoo', 'all-in-one-wp-sticky-anything'), value: 'lni-yahoo' },
            { label: wp.i18n.__('Yarn', 'all-in-one-wp-sticky-anything'), value: 'lni-yarn' },
            { label: wp.i18n.__('YCombinator', 'all-in-one-wp-sticky-anything'), value: 'lni-ycombinator' },
            { label: wp.i18n.__('YouTube', 'all-in-one-wp-sticky-anything'), value: 'lni-youtube' },
            { label: wp.i18n.__('YouTube Kids', 'all-in-one-wp-sticky-anything'), value: 'lni-youtube-kids' },
            { label: wp.i18n.__('YouTube Music', 'all-in-one-wp-sticky-anything'), value: 'lni-youtube-music' },
            { label: wp.i18n.__('Zapier', 'all-in-one-wp-sticky-anything'), value: 'lni-zapier' },
            { label: wp.i18n.__('Zoom', 'all-in-one-wp-sticky-anything'), value: 'lni-zoom' }
        ]
    }

    const currentSocialIcons = socialIconOptions[data.stickySocialIconType] || socialIconOptions.dashicons;

    return (
        <div className="ai1wpsa-settings-content">
            <div class="ai1wpsa-settings-content-header">
                <i class="dashicons dashicons-sticky"></i>
                <span>{wp.i18n.__('Sticky Social Icons Settings', 'all-in-one-wp-sticky-anything')}</span>
            </div>
            <div className="settings-content">
                {/* sticky social icons start here */}
                <div class="settings-field">
                    <h4 class="settings-field-label">{wp.i18n.__('Sticky Social Icons', 'all-in-one-wp-sticky-anything')}</h4>
                    <div class="settings-field-content">

                        <FormToggle
                            checked={stickySocialIcon}
                            onChange={() => setData({ ...data, stickySocialIcon: !stickySocialIcon })}
                        />

                        <p className="description">{wp.i18n.__('Enable or disable the sticky social icons.', 'all-in-one-wp-sticky-anything')}</p>
                    </div>
                </div>
                {/* sticky social icons stop here */}

                {!!stickySocialIcon && <>
                    <div class="settings-field">
                        <h4 class="settings-field-label">
                            {wp.i18n.__('Icons Type', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div class="settings-field-content">

                            <ButtonGroup>
                                {iconOptions.map((icon) => (
                                    <Button
                                        key={icon.value}
                                        className={icon.pro && !isPro ? 'ai1wpsa-disabled' : ''}
                                        onClick={() => {
                                            if (icon.pro && !isPro) {
                                                showProModal();
                                                return;
                                            }
                                            setData({ ...data, stickySocialIconType: icon.value });
                                        }}
                                        variant={stickySocialIconType === icon.value ? 'primary' : ''}
                                    >
                                        {icon.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            {!isPro && <Tooltip anchorSelect=".ai1wpsa-pro-feature" variant="warning" content={wp.i18n.__('Pro Feature', 'all-in-one-wp-sticky-anything')} />}

                            <p className="description">{wp.i18n.__('Select the social icons library.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>

                    <div class="settings-field">
                        <h4 class="settings-field-label">
                            {wp.i18n.__('Icons Position', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div class="settings-field-content">

                            <ButtonGroup>
                                {positionOptions.map((pos) => (
                                    <Button
                                        key={pos.value}
                                        className={pos.pro && !isPro ? 'ai1wpsa-disabled' : ''}
                                        onClick={() => {
                                            if (pos.pro && !isPro) {
                                                showProModal();
                                                return;
                                            }
                                            setData({ ...data, stickySocialIconPosition: pos.value });
                                        }}
                                        title={pos.pro ? wp.i18n.__('Pro Feature', 'all-in-one-wp-sticky-anything') : ''}
                                        variant={stickySocialIconPosition === pos.value ? 'primary' : ''}
                                    >
                                        {pos.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            <p className="description">{wp.i18n.__('Select the social icons position on the frontend.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>

                    <div class="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Icons Style', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">

                            <ButtonGroup>
                                {styleOptions.map((style) => (
                                    <Button
                                        key={style.value}
                                        onClick={() => setData({ ...data, stickySocialIconStyle: style.value })}
                                        variant={stickySocialIconStyle === style.value ? 'primary' : ''}
                                    >
                                        {style.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            <p className="description">{wp.i18n.__('Select the social icons style on the frontend.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>

                    {/* display location start here*/}
                    <div class="settings-field">
                        <h4 class="settings-field-label">
                            {wp.i18n.__('Display Location', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div class="settings-field-content">

                            <ButtonGroup>
                                {displayLocationOptions.map((display) => (
                                    <Button
                                        key={display.value}
                                        className={display.pro && !isPro ? 'ai1wpsa-disabled' : ''}
                                        onClick={() => {
                                            if (display.pro && !isPro) {
                                                showProModal();
                                                return;
                                            }
                                            setData({ ...data, stickySocialIconDisplay: display.value });
                                        }}
                                        variant={stickySocialIconDisplay === display.value ? 'primary' : ''}
                                        title={!isPro ? wp.i18n.__('Pro feature', 'all-in-one-wp-sticky-anything') : ''}
                                    >
                                        {display.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            <p className="description">{wp.i18n.__('set the social icon display location visibility on the frontend.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* display location stop here */}

                    {/* device start here */}
                    <div class="settings-field">
                        <h4 class="settings-field-label">
                            {wp.i18n.__('Device', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div class="settings-field-content">

                            <ButtonGroup>
                                {deviceOptions.map((device) => (
                                    <Button
                                        key={device.value}
                                        className={device.pro && !isPro ? 'ai1wpsa-disabled' : ''}
                                        onClick={() => {
                                            if (device.pro && !isPro) {
                                                showProModal();
                                                return;
                                            }
                                            setData({ ...data, stickySocialIconDevice: device.value });
                                        }}
                                        variant={stickySocialIconDevice === device.value ? 'primary' : ''}
                                        title={!isPro ? wp.i18n.__('Pro feature', 'all-in-one-wp-sticky-anything') : ''}
                                    >
                                        {device.label}
                                    </Button>
                                ))}
                            </ButtonGroup>

                            <p className="description">{wp.i18n.__('set the social icon device visibility on the frontend.', 'all-in-one-wp-sticky-anything')}</p>
                        </div>
                    </div>
                    {/* device stop here */}

                    <div className="settings-field social-icons">
                        <h4 class="settings-field-label">{wp.i18n.__('Social Icons', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">
                            <div className="icon-list">
                                {stickySocialIcons?.map((icon) => (
                                    <div className="icon-list-item" key={icon.id}>
                                        <div className="icon">
                                            <SelectControl
                                                value={icon.value}
                                                options={currentSocialIcons}
                                                className="ai1wpsa-select-control"
                                                onChange={(value) => {
                                                    setData({
                                                        ...data,
                                                        stickySocialIcons: data.stickySocialIcons.map((item) =>
                                                            item.id === icon.id ? { ...item, value } : item
                                                        ),
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="url">
                                            <TextControl
                                                type="url"
                                                value={icon.url}
                                                className="ai1wpsa-text-control"
                                                placeholder={wp.i18n.__('Enter URL', 'all-in-one-wp-sticky-anything')}
                                                onChange={(value) => {
                                                    setData({
                                                        ...data,
                                                        stickySocialIcons: data.stickySocialIcons.map((item) =>
                                                            item.id === icon.id ? { ...item, url: value } : item
                                                        ),
                                                    });
                                                }}
                                            />
                                        </div>
                                        <div className="actions">
                                            {
                                                stickySocialIcons.length > 1 && (
                                                    <>
                                                        <Button
                                                            type="button"
                                                            className="ai1wpsa-btn duplicate"
                                                            onClick={() => {
                                                                setData({
                                                                    ...data,
                                                                    stickySocialIcons: [
                                                                        ...data.stickySocialIcons,
                                                                        {
                                                                            id: Math.random().toString(36).substring(7),
                                                                            value: icon.value,
                                                                            url: icon.url,
                                                                        },
                                                                    ],
                                                                });
                                                            }}
                                                        >
                                                            <i className="dashicons dashicons-admin-page"></i>
                                                        </Button>

                                                        <Button
                                                            type="button"
                                                            className="ai1wpsa-btn delete"
                                                            onClick={() => {
                                                                setData({
                                                                    ...data,
                                                                    stickySocialIcons: data.stickySocialIcons.filter(
                                                                        (item) => item.id !== icon.id
                                                                    ),
                                                                });
                                                            }}
                                                        >
                                                            <i className="dashicons dashicons-trash"></i>
                                                        </Button>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </div>
                                ))}

                                <Button
                                    type="button"
                                    className="ai1wpsa-btn"
                                    onClick={() => {
                                        setData({
                                            ...data,
                                            stickySocialIcons: [
                                                ...(data.stickySocialIcons || []),
                                                {
                                                    id: Math.random().toString(36).substring(7),
                                                    value: '',
                                                    url: '',
                                                },
                                            ],
                                        });
                                    }}
                                >
                                    {wp.i18n.__('Add New', 'all-in-one-wp-sticky-anything')}
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* icon menu bg color start here */}
                    <div className="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Icon Menu Background Color', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">
                            <ColorPickerWrapper
                                value={stickySocialIconsMenuBgColor}
                                onChange={(value) => setData({ ...data, stickySocialIconsMenuBgColor: value })}
                                allowReset={true}
                                resetValue={'#004bcb'}
                            />
                        </div>
                    </div>
                    {/* icon menu bg color stop here */}

                    {/* icon color start here */}
                    <div className="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Icon Color', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">
                            <ColorPickerWrapper
                                value={stickySocialIconsIconColor}
                                onChange={(value) => setData({ ...data, stickySocialIconsIconColor: value })}
                                allowReset={true}
                                resetValue={'#fff'}
                            />
                        </div>
                    </div>
                    {/* icon color stop here */}

                    {/* icon hover color start here */}
                    <div className="settings-field">
                        <h4 class="settings-field-label">
                            {wp.i18n.__('Icon Hover Color', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div class="settings-field-content">
                            <ColorPickerWrapper
                                value={stickySocialIconsIconHoverColor}
                                customClassName={`${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, stickySocialIconsIconHoverColor: value });
                                }}
                                allowReset={true}
                            />
                        </div>
                    </div>
                    {/* icon hover color stop here */}

                    {/* icon bg color start here */}
                    <div className="settings-field">
                        <h4 class="settings-field-label">{wp.i18n.__('Icon Background Color', 'all-in-one-wp-sticky-anything')}</h4>
                        <div class="settings-field-content">
                            <ColorPickerWrapper
                                value={stickySocialIconsIconBgColor}
                                onChange={(value) => setData({ ...data, stickySocialIconsIconBgColor: value })}
                                allowReset={true}
                                resetValue={'#fff'}
                            />
                        </div>
                    </div>
                    {/* icon bg color stop here */}

                    {/* icon bg hover color start here */}
                    <div className="settings-field">
                        <h4 class="settings-field-label">
                            {wp.i18n.__('Icon Background Hover Color', 'all-in-one-wp-sticky-anything')}
                            <ProIcon />
                        </h4>
                        <div class="settings-field-content">
                            <ColorPickerWrapper
                                value={stickySocialIconsIconHoverBgColor}
                                customClassName={`${!isPro ? 'ai1wpsa-disabled' : ''}`}
                                onChange={(value) => {
                                    if (!isPro) {
                                        showProModal();
                                        return;
                                    }

                                    setData({ ...data, stickySocialIconsIconHoverBgColor: value });
                                }}
                                allowReset={true}
                            />
                        </div>
                    </div>
                    {/* icon bg hover color stop here */}
                </>}
            </div>
        </div>
    )
}
