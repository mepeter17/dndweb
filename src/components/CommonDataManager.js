export default class CommonDataManager
{
    static myInstance = null;
    
    _class = "Barbarian";
    _race = "Dwarf";
    
    _alignment = null;

    _stats = "empty";
    _cats = "empty";

    _gender = null;
    _name = "";
    _ft = "";
    _in = "";
    _lbs = "";
    _bio = "";

    /**
     * @returns {CommonDataManager}
     */
    static getInstance() {
        if (CommonDataManager.myInstance == null) {
            CommonDataManager.myInstance = new CommonDataManager();
        }

        return this.myInstance;
    }

    getStats() {
        return this._stats;
    }

    setStats(stats) {
        this._stats = stats;
    }

    getCats()
    {
      return this._cats;
    }

    setCats(cats)
    {
      this._cats = cats;
    }
}
