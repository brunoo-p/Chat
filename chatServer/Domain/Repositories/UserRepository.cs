using System.Threading.Tasks;
using Chat.Infrastructure.Entities;
using Chat.Infrastructure.Interface;

namespace Chat.Domain.Repositories
{
    public class UserRepository : IUser
    {
        public Task<User> addUser(User user)
        {
            throw new System.NotImplementedException();
        }

        public User login(string nickname, string password)
        {
            var user = new User(
                name: "Bruno Paulino",
                nickname: "brunoo-p",
                password: "blabla"
            );

            return user;
        }
    }
}