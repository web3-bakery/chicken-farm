import { Box, Typography, Link, Button } from "@mui/material";

interface Call2ActionBoxProps {
  title: String;
  description: String;
  link: String;
  linkText: String;
}

const Call2ActionBox: React.FC<Call2ActionBoxProps> = (props) => {
  const { title, description, link, linkText } = props;

  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        borderRadius: 2,
        boxShadow: 1,
        overflow: "hidden",
        my: 4,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(90deg, rgba(22, 22, 22, 0) 0%, #998206 100%)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 4,
          p: 4,
          position: "relative",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography color='background.default' gutterBottom variant="h4">
            {title}
          </Typography>
          <Typography color='background.default'>{description}</Typography>
          <Link href={link.toString()}>
            <Button
              sx={{ height: 40, mt: 2 }}
              color="secondary"
              variant="contained"
            >
              {linkText}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Call2ActionBox;
