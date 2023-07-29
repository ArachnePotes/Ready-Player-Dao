text = open('DaoBase\database\Data_csv\games.txt','r')
end = open('DaoBase\database\games.sql','w')
count = 0
for line in text:
    count += 1
    li = line.split(',')
    end.write(f'''
INSERT INTO readyplayerdao.game (game_id,game_name,game_category)
VALUES ({count},"{li[0]}","{li[1]}");
              ''')