import TeamPage from '../components/teamPage';
import TextScramble from '../utils/TextScramble';
import teamMembers from '../assets/data/team.json';

const Team = () => {
  return (
      <div className="flex flex-col justify-center items-center mx-10 my-14">
        <div className="flex flex-col justify-center items-center text-white">
          {/* <Text
                    Text="Our Team"
                    width="50vw"
                    height="29vh"
                    fontSize="100px"
                    /> */}
          <TextScramble text="Our Team"/>
        </div>
        <TeamPage teamMembers={teamMembers}/>
      </div>
  );
};

export default Team;
