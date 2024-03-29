import grey from '@material-ui/core/colors/grey';
import { colors, makeStyles, Theme } from '@material-ui/core';

export const useHomeStyles = makeStyles((theme: Theme) => ({
  centered: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  wrapper: {
    height: '100vh',
  },
  logo: {
    margin: '10px 0',
  },
  logoIcon: {
    fontSize: 36,
  },
  sideMenuList: {
    position: 'sticky',
    top: 0,
    listStyle: 'none',
    padding: 0,
    margin: 0,
    maxWidth: 230,
  },
  sideMenuListItem: {
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },

    cursor: 'pointer',

    '&:hover': {
      '& div': {
        backgroundColor: 'rgba(29, 161, 242, 0.1)',
        '& h6': {
          color: theme.palette.primary.main,
        },
        '& svg path': {
          fill: theme.palette.primary.main,
        },
      },
    },

    '& div': {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      padding: '0 25px 0 20px',
      borderRadius: 30,
      height: 50,
      marginBottom: 15,
      transition: 'background-color 0.1s ease-in-out',
    },
  },
  sideMenuListItemLabel: {
    fontWeight: 700,
    fontSize: 20,
    marginLeft: 15,
  },
  sideMenuListItemIcon: {
    fontSize: 32,
    marginLeft: -5,
  },
  sideMenuTweetButton: {
    padding: theme.spacing(3.2),
    marginTop: theme.spacing(2),
  },
  tweetHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tweetContent: {
    flex: 1,
  },
  tweetsHeader: {
    display: 'flex',
    alignItems: 'center',
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderRadius: 0,
    padding: '10px 15px',
    '& h6': {
      fontWeight: 800,
    },
  },
  tweetsHeaderUser: {
    display: 'flex',
    alignItems: 'center',
  },
  fullTweet: {
    padding: 25,
  },
  fullTweetText: {
    fontSize: 24,
    marginTop: 20,
    lineHeight: 1.3125,
    wordBreak: 'break-word',
  },
  fullTweetFooter: {
    margin: '0 auto',
    borderTop: '1px solid #E6ECF0',
    left: 0,
    maxWidth: '100%',
    justifyContent: 'space-around',
    padding: '2px 0',
    marginTop: 20,
  },

  tweetsWrapper: {
    borderRadius: 0,
    height: '100%',
    borderTop: '0',
    borderBottom: '0',
  },
  tweetsCentred: {
    marginTop: 50,
    textAlign: 'center',
  },

  tweet: {
    display: 'flex',
    alignItems: 'flex-start',
    cursor: 'pointer',
    paddingTop: 15,
    paddingLeft: 20,
    '&:hover': {
      backgroundColor: 'rgb(245, 248, 250)',
    },
  },
  tweetWrapper: {
    textDecoration: 'none',
    color: 'inherit',
  },
  tweetAvatar: {
    width: theme.spacing(6.5),
    height: theme.spacing(6.5),
    marginRight: 15,
  },
  tweetFooter: {
    display: 'flex',
    position: 'relative',
    left: -13,
    justifyContent: 'space-between',
    maxWidth: 450,
  },
  tweetUserName: {
    color: grey[500],
  },
  rightSide: {
    paddingTop: 20,
    position: 'sticky',
    top: 0,
  },
  rightSideBlock: {
    backgroundColor: '#F5F8FA',
    borderRadius: 15,
    marginTop: 20,
    '& .MuiList-root': {
      paddingTop: 0,
    },
  },
  rightSideBlockHeader: {
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    backgroundColor: 'transparent',
    padding: '13px 18px',
    '& b': {
      fontSize: 20,
      fontWeight: 800,
    },
  },
  rightSideBlockItem: {
    cursor: 'pointer',
    '& .MuiTypography-body1': {
      fontWeight: 700,
    },
    '& .MuiListItemAvatar-root': {
      minWidth: 50,
    },
    '& .MuiListItemText-root': {
      margin: 0,
    },
    '&:hover': {
      backgroundColor: '#edf3f6',
    },
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
    },
  },
  addForm: {
    padding: 20,
  },
  addFormBody: {
    display: 'flex',
    width: '100%',
  },
  addFormBottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addFormBottomActions: {
    marginTop: 10,
    paddingLeft: 70,
  },
  addFormTextarea: {
    width: '100%',
    border: 0,
    fontSize: 20,
    outline: 'none',
    fontFamily: 'inherit',
    resize: 'none',
  },
  addFormBottomLine: {
    height: 12,
    backgroundColor: '#E6ECF0',
  },
  addFormCircleProgress: {
    position: 'relative',
    width: 20,
    height: 20,
    margin: '0 10px',
    '& .MuiCircularProgress-root': {
      position: 'absolute',
    },
  },
  addFormBottomRight: {
    display: 'flex',
    alignItems: 'center',
  },
  sideProfile: {
    display: 'flex',
    alignItems: 'center',
    position: 'fixed',
    bottom: 30,
    padding: '10px 15px',
    width: 260,
    borderRadius: 50,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: colors.lightBlue[50],
    },
  },
  sideProfileInfo: {
    flex: 1,
    marginLeft: 10,
    '& b': {
      fontSize: 16,
    },
  },
  imagesList: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',

    flexWrap: 'wrap',
  },
  imagesListItem: {
    width: 50,
    height: 50,

    marginRight: '8px',
    marginBottom: '10px',
    // overflow: 'hidden',
    position: 'relative',
    '& img': {
      width: ' 100%',
      height: '100%',
      borderRadius: '6px',
      'object-fit': 'cover',
    },
    '& svg path': {
      fill: 'white',
    },
  },
  imagesListItemRemove: {
    backgroundColor: 'red !important',
    position: 'absolute',
    top: '-5px',
    left: '40px',
    padding: '0px',
  },
  profileMenu: {
    top: 'auto !important',
    left: '350px !important',
    width: '250px !important',
    bottom: '110px !important',
    boxShadow: '1px 1px 10px, rgba(0,0,0,0.08)',
    borderRadius: '20px',
    border: '1px solid rgba(0,0,0.1)',
  },
}));
function translateY(
  arg0: number,
  arg1: number,
): string | import('@material-ui/styles').PropsFunc<{}, string | undefined> | undefined {
  throw new Error('Function not implemented.');
}
