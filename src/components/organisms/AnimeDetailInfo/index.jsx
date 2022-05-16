import styled from "@emotion/styled";
import { Space } from "antd";
import moment from "moment";
import DetailItem from "components/molecules/DetailItem";

const Spacer = styled(Space)`
  width: 100%;
`

const AnimeDetailInfo = ({ 
  episodes = 0,
  duration = 0,
  genres,
  averageScore = 0,
  startDate,
  endDate,
  description = ""
}) => {

  const getAiredDate = () => {
    let start = "?"
    let end = "?"
    {
      const { year, month, day } = startDate
      if (year && month && day){
        start = moment(`${year}-${month}-${day}`, "YYYY-MM-DD").format("MMMM DD, YYYY")
      }
    }
    {
      const { year, month, day } = endDate
      if (year && month && day){
        end = moment(`${year}-${month}-${day}`, "YYYY-MM-DD").format("MMMM DD, YYYY")
      }
    }
    return `${start} to ${end}`
  }

  return (
    <Spacer direction="vertical">
      <DetailItem 
        title="Episode"
        desc={`${episodes || 0} episodes`}
      />
      <DetailItem 
        title="Duration"
        desc={`${duration || 0} minutes per episode`}
      />
      <DetailItem 
        title="Genres"
        desc={genres ? genres.join(", ") : "-"}
      />
      <DetailItem 
        title="Score"
        desc={averageScore ? averageScore / 10 : 0}
      />
      <DetailItem 
        title="Aired"
        desc={getAiredDate()}
      />
      <DetailItem 
        title="Synopsis"
        desc={description ? description : "-"}
      />
    </Spacer>
  )
}

export default AnimeDetailInfo