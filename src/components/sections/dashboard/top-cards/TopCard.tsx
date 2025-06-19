import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { TopCard as TopCardDataProps } from 'data/topCardsData';

interface TopCardProps {
  data: TopCardDataProps;
}

const TopCard = ({ data }: TopCardProps) => {
  return (
    <Stack component={Paper} p={3} alignItems="center" spacing={2.5}>
      <div>
        <Typography variant="h5" color="neutral.darker" fontWeight={800}>
          {data.count}+
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {data.title}
        </Typography>
      </div>
    </Stack>
  );
};

export default TopCard;
